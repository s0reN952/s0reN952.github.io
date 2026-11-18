# Mon portfolio

Site personnel qui présente mes projets en cybersécurité et développement.

## Contenu du dossier

| Fichier | À quoi il sert | Faut-il le modifier ? |
|---|---|---|
| `contenu.js` | Tous les textes du site : nom, projets, parcours, compétences, contact | **Oui, c'est le seul** |
| `images/` | Captures d'écran et schémas des projets | Oui, ajoute tes images ici |
| `cv.pdf` | Ton CV (à ajouter, avec ce nom exact) | Oui |
| `index.html`, `style.css`, `script.js` | La structure et le design du site | Non |

## Remplir le site

1. Ouvre `contenu.js` et remplace les textes d'exemple par les tiens.
2. Pour chaque projet, remplis : contexte, objectif, ton rôle, ce que tu as fait, technologies, résultat.
3. Mets `confidentiel: true` pour un projet d'entreprise présenté sans code : une note l'explique au recruteur.
4. Ajoute tes images dans `images/` et indique leur nom dans le projet, par exemple `"images/mon-schema.png"`.
5. Ajoute ton CV dans le dossier, nommé `cv.pdf`.

Pour voir le résultat sur ton ordinateur, double-clique sur `index.html` : il s'ouvre dans ton navigateur.

## Mettre en ligne avec GitHub Pages

1. Sur github.com, clique sur **+** en haut à droite, puis **New repository**.
2. Dans *Repository name*, écris exactement **`ton-pseudo.github.io`** (avec ton vrai pseudo GitHub).
3. Laisse le dépôt en **Public** et clique sur **Create repository**.
4. Sur la page qui s'ouvre, clique sur le lien **uploading an existing file**.
5. Glisse **le contenu** du dossier (les fichiers et le dossier `images`, pas le dossier `portfolio` lui-même), puis clique sur **Commit changes**.
6. Va dans **Settings** puis **Pages** : vérifie que *Source* est sur **Deploy from a branch**, branche **main**, dossier **/ (root)**.
7. Après une ou deux minutes, ton site est en ligne à l'adresse **https://ton-pseudo.github.io**.

## Mettre à jour le site plus tard

Sur github.com, ouvre `contenu.js`, clique sur l'icône crayon, modifie le texte, puis clique sur **Commit changes**. Le site se met à jour en une ou deux minutes.

Pour ajouter une image ou remplacer ton CV, utilise **Add file** puis **Upload files**.

## Si le site ne s'affiche plus

Le plus souvent, c'est une virgule ou un guillemet oublié dans `contenu.js`. Vérifie la dernière ligne que tu as modifiée : chaque texte est entre `"guillemets"` et chaque élément d'une liste se termine par une virgule.
