// Ce fichier affiche le contenu de contenu.js dans la page.
// Tu n'as normalement pas besoin de le modifier.

(function () {
  "use strict";

  const C = CONTENU;
  const $ = (sel, parent = document) => parent.querySelector(sel);
  const $$ = (sel, parent = document) => Array.from(parent.querySelectorAll(sel));

  // Crée un élément HTML avec du texte (jamais de HTML brut : plus sûr).
  function el(tag, attrs = {}, enfants = []) {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "texte") n.textContent = v;
      else if (k === "classe") n.className = v;
      else n.setAttribute(k, v);
    }
    [].concat(enfants).forEach((e) => e && n.append(e));
    return n;
  }

  const rempli = (v) => typeof v === "string" ? v.trim() !== "" : Array.isArray(v) && v.length > 0;

  // ---------- Champs simples ----------
  document.title = `${C.nom}, ${C.metier}`;
  $$("[data-champ]").forEach((n) => { n.textContent = C[n.dataset.champ] || ""; });

  $$('[data-lien="cv"]').forEach((a) => {
    if (rempli(C.cv)) a.href = C.cv; else a.remove();
  });
  $$('[data-lien="email"]').forEach((a) => {
    a.href = `mailto:${C.email}`;
    a.textContent = C.email;
  });

  // ---------- Projets ----------
  const liste = $("#liste-projets");
  const compteur = $("#compteur");

  function afficherProjets(filtre) {
    liste.replaceChildren();
    const visibles = C.projets
      .map((p, i) => ({ p, i }))
      .filter(({ p }) => filtre === "Tous" || p.cadre === filtre);

    compteur.textContent = `(${visibles.length})`;

    if (visibles.length === 0) {
      liste.append(el("li", { classe: "projets-vide", texte: `Aucun projet « ${filtre} » pour le moment.` }));
      return;
    }

    visibles.forEach(({ p, i }) => {
      const bouton = el("button", { type: "button", classe: "projet", "data-index": i }, [
        el("span", { classe: "projet-annee", texte: p.annee }),
        el("span", { classe: "projet-principal" }, [
          el("span", { classe: "projet-titre", texte: p.titre }),
          el("span", { classe: "projet-resume", texte: p.resume }),
          el("span", { classe: "projet-technos", texte: (p.technologies || []).join(", ") })
        ]),
        el("span", { classe: `projet-cadre cadre-${p.cadre === "Entreprise" ? "entreprise" : "ecole"}`, texte: p.cadre }),
        el("span", { classe: "projet-ouvrir", texte: "Détails" })
      ]);
      bouton.addEventListener("click", () => ouvrirFiche(i, bouton));
      liste.append(el("li", {}, bouton));
    });
  }

  $$(".filtre").forEach((b) => {
    b.addEventListener("click", () => {
      $$(".filtre").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      afficherProjets(b.dataset.filtre);
    });
  });
  // Cache les filtres s'il n'y a qu'un seul type de projet.
  if (new Set(C.projets.map((p) => p.cadre)).size < 2) $(".filtres").hidden = true;
  afficherProjets("Tous");

  // ---------- Fiche détaillée ----------
  const fiche = $("#fiche");
  const corps = $("#fiche-corps");
  let declencheur = null;

  function bloc(titre, contenu) {
    if (!rempli(contenu)) return null;
    const valeur = Array.isArray(contenu)
      ? el("ul", {}, contenu.map((x) => el("li", { texte: x })))
      : el("p", { texte: contenu });
    return el("div", { classe: "fiche-bloc" }, [el("h3", { texte: titre }), valeur]);
  }

  function ouvrirFiche(i, bouton) {
    const p = C.projets[i];
    declencheur = bouton;

    const tete = el("header", { classe: "fiche-tete" }, [
      el("p", { classe: "fiche-meta", texte: `${p.cadre}, ${p.annee}` }),
      el("h2", { id: "fiche-titre", texte: p.titre }),
      el("p", { classe: "fiche-resume", texte: p.resume })
    ]);

    const note = p.confidentiel
      ? el("p", { classe: "fiche-note", texte: "Projet réalisé en entreprise : il est présenté sans code ni données internes, par respect de la confidentialité." })
      : null;

    const images = rempli(p.images)
      ? el("div", { classe: "fiche-images" }, p.images.map((img) =>
          el("figure", {}, [
            el("img", { src: img.fichier, alt: img.legende || "", loading: "lazy" }),
            rempli(img.legende) ? el("figcaption", { texte: img.legende }) : null
          ])))
      : null;

    const technos = rempli(p.technologies)
      ? el("div", { classe: "fiche-bloc" }, [
          el("h3", { texte: "Technologies" }),
          el("ul", { classe: "etiquettes" }, p.technologies.map((t) => el("li", { texte: t })))
        ])
      : null;

    const liensValides = (p.liens || []).filter((l) => rempli(l.url));
    const liens = liensValides.length
      ? el("div", { classe: "fiche-liens" }, liensValides.map((l) =>
          el("a", { classe: "bouton bouton-trait", href: l.url, target: "_blank", rel: "noopener", texte: l.texte || "Voir le projet" })))
      : null;

    corps.replaceChildren(...[
      tete, note, images,
      el("div", { classe: "fiche-grille" }, [
        bloc("Contexte", p.contexte),
        bloc("Objectif", p.objectif),
        bloc("Mon rôle", p.role),
        bloc("Ce que j'ai fait", p.realisations),
        technos,
        bloc("Résultat", p.resultat)
      ]),
      liens
    ].filter(Boolean));

    fiche.showModal();
    fiche.scrollTop = 0;
  }

  function fermerFiche() { fiche.close(); }
  $("#fiche-fermer").addEventListener("click", fermerFiche);
  fiche.addEventListener("click", (e) => { if (e.target === fiche) fermerFiche(); });
  fiche.addEventListener("close", () => { if (declencheur) declencheur.focus(); });

  // ---------- À propos ----------
  $("#apropos").replaceChildren(...(C.aPropos || []).map((t) => el("p", { texte: t })));

  // ---------- Parcours ----------
  $("#liste-parcours").replaceChildren(...(C.parcours || []).map((e) =>
    el("li", {}, [
      el("p", { classe: "parcours-periode", texte: e.periode }),
      el("p", { classe: "parcours-titre", texte: e.titre }),
      rempli(e.lieu) ? el("p", { classe: "parcours-lieu", texte: e.lieu }) : null,
      rempli(e.description) ? el("p", { classe: "parcours-desc", texte: e.description }) : null
    ])));

  // ---------- Compétences ----------
  $("#liste-competences").replaceChildren(...(C.competences || []).map((g) =>
    el("div", { classe: "competence" }, [
      el("h3", { texte: g.categorie }),
      el("ul", {}, g.elements.map((x) => el("li", { texte: x })))
    ])));

  // ---------- Liens de contact ----------
  const liensContact = [
    ["LinkedIn", C.linkedin],
    ["GitHub", C.github],
    ["Télécharger mon CV", C.cv]
  ].filter(([, url]) => rempli(url));
  $("#contact-liens").replaceChildren(...liensContact.map(([texte, url]) => {
    const a = el("a", { href: url, texte });
    if (url === C.cv) a.setAttribute("download", "");
    else { a.target = "_blank"; a.rel = "noopener"; }
    return el("li", {}, a);
  }));
})();
