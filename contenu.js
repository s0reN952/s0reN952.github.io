// =====================================================================
//  CONTENU DU PORTFOLIO
// =====================================================================

const CONTENU = {

  // ---------- Profil ----------
  nom: "Soren Ouyahia",
  metier: "Alternant en informatique, orienté cybersécurité",
  accroche: "Je conçois des outils pour détecter, analyser et prévenir les attaques et j'automatise les tâches de sécurité avec du code.",
  disponibilite: "En alternance chez Command Strategy, ouvert à un CDI à la fin de mes études",
  localisation: "Val-d'Oise, Île-de-France",

  // ---------- Contact ----------
  email: "soren.oyh@gmail.com",
  linkedin: "https://www.linkedin.com/in/soren-ouyahia-bb3807281",
  github: "https://github.com/s0reN952",
  cv: "cv.pdf",

  // ---------- À propos ----------
  aPropos: [
    "J'ai 22 ans et je suis étudiant à l'ESGI à Paris en cursus alternance. Après des expériences chez ARKEMA, Thalia NeoMedia et Command Strategy, je me spécialise en cybersécurité.",
    "Ce qui m'intéresse : comprendre comment les attaquants agissent pour mieux protéger. Mes projets vont de la détection (honeypot, SIEM) à la sensibilisation des utilisateurs (campagne de phishing).",
    "Mon objectif est de devenir un profil cybersécurité capable d'automatiser ses outils avec du code. J'aime travailler en équipe et échanger avec des interlocuteurs variés."
  ],

  // ---------- Schéma de l'accueil ----------
  labo: {
    centre: "VMware Workstation",
    machines: [
      "SIEM Wazuh Manager (Dashboard)",
      "Serveur-Web (attaque et collecte de logs)",
      "FireWall pfSense (logs et pare-feux)"
    ]
  },

  // ---------- Projets ----------
  projets: [
    {
      titre: "Honeypot SSH et analyse des attaques",
      cadre: "École",
      annee: "2026",
      resume: "Un honeypot SSH développé de zéro en Python déployé sur un VPS qui a capturé de vraies attaques venues d'Internet.",
      contexte: "Projet annuel de 3e année à l'ESGI (cybersécurité), réalisé à trois sur 5 mois. Chacun a développé un honeypot (SSH, Web, FTP), reliés ensuite dans une infrastructure commune. Le cahier des charges imposait un développement 100 % personnalisé, sans réutiliser de solution existante comme Cowrie.",
      objectif: "Piéger des attaquants avec de faux services exposés sur Internet pour détecter leurs attaques, enregistrer leurs actions et analyser leurs techniques.",
      role: "J'ai pris en charge le honeypot SSH, que j'ai développé entièrement en Python ainsi que ses scripts d'analyse. Je l'ai ensuite relié au back office commun du groupe.",
      realisations: [
        "Serveur SSH factice basé sur Paramiko qui accepte plusieurs connexions simultanées grâce à socket et threading",
        "Identifiants volontairement faibles pour attirer les attaquants, et journalisation de chaque tentative de connexion (réussie ou échouée) au format JSONL",
        "Faux shell Linux qui enregistre toutes les commandes tapées, sans jamais exposer la vraie machine",
        "Script de rapport en ligne de commande : identifiants, mots de passe et adresses IP les plus utilisés par les attaquants",
        "Génération de graphiques d'analyse avec matplotlib",
        "Déploiement en service persistant sur un VPS OVH (Debian/Ubuntu)",
        "Raccordement au back office commun (Flask + SQLite) qui rassemble les logs des trois honeypots dans un tableau de bord unique sur le principe d'un SIEM",
        "Tests d'intrusion pour valider le honeypot : scan Nmap, brute force avec Hydra"
      ],
      technologies: ["Python", "Paramiko", "matplotlib", "Flask", "SQLite", "JSONL", "Linux (Debian/Ubuntu)", "VPS OVH", "Nmap", "Hydra"],
      resultat: "Une fois en ligne sur le VPS, le honeypot a capturé de véritables attaques automatisées venant d'adresses IP externes : tentatives de connexion par force brute, toutes enregistrées puis analysées avec les scripts de rapport et de graphiques.",
      images: [],
      liens: [],
    },
    {
      titre: "Déploiement automatisé d'un SIEM open source",
      cadre: "École",
      annee: "2026",
      resume: "Un SIEM Wazuh qui se déploie en une seule commande avec Ansible et détecte les intrusions en temps réel sur plusieurs machines.",
      contexte: "Projet réalisé seul à l'ESGI, sur un laboratoire de 3 machines virtuelles (Debian 13 et pfSense) sous VMware Workstation, sur une durée de 2 mois.",
      objectif: "Collecter, analyser et corréler les logs de plusieurs machines pour détecter des intrusions en temps réel, avec une infrastructure reproductible qui se redéploie à l'identique en une commande.",
      role: "J'ai mené le projet seul, de bout en bout : conception de l'architecture, automatisation du déploiement, écriture des décodeurs et des règles de détection, mise en place des alertes et du tableau de bord.",
      realisations: [
        "Déploiement complet en une seule commande avec Ansible, reproductible et idempotent, sur Docker Compose",
        "Collecte de logs de trois sources différentes : authentification SSH, serveur web Nginx et pare-feu pfSense",
        "Décodeur personnalisé pour normaliser les logs et en extraire les champs utiles",
        "14 règles de détection mappées sur MITRE ATT&CK : brute-force SSH, scan de ports, escalade de privilèges, attaques web",
        "Règle de corrélation qui relie un scan réseau à une tentative de connexion SSH venant de la même adresse IP",
        "Alertes envoyées sur trois canaux : email (SMTP), webhook (script Python) et fichier JSON",
        "Ajout d'une source de threat intelligence : liste d'IP malveillantes mise à jour chaque jour",
        "Tableau de bord de visualisation et rétention automatique des données sur 30 jours"
      ],
      technologies: ["Wazuh 4.14", "Ansible", "Docker Compose", "Debian 13", "pfSense", "VMware Workstation", "rsyslog", "MITRE ATT&CK", "OpenSearch Dashboards", "Python", "Mailpit"],
      resultat: "Un SIEM opérationnel qui se redéploie à l'identique en une commande et détecte les principales phases d'une attaque, du scan réseau jusqu'à l'escalade de privilèges, en prévenant sur trois canaux.",
      images: [],
      liens: [],
    },
    {
      titre: "Simulateur de campagnes de phishing",
      cadre: "Entreprise",
      annee: "2026",
      resume: "Une API .NET qui mène des campagnes de phishing simulées pour sensibiliser les salariés : envoi des emails, suivi des clics et redirection vers une page de prévention.",
      contexte: "Projet réalisé seul pendant mon alternance chez Command Strategy (poste de développeur full-stack), sur une durée de 2 mois.",
      objectif: "Sensibiliser les collaborateurs, pas les piéger : mesurer qui clique sur un faux email, puis transformer chaque clic en moment d'apprentissage grâce à une page qui explique comment reconnaître une tentative de phishing.",
      role: "J'ai conçu et développé seul l'ensemble de l'outil : architecture, API, sécurité, envoi des emails, statistiques et pipeline de déploiement.",
      realisations: [
        "Gestion du cycle complet d'une campagne : création, envoi en masse, suivi des clics et statistiques",
        "Modèles d'emails à variables et lien de suivi unique pour chaque destinataire (prénom, nom, email)",
        "Redirection systématique vers une page de sensibilisation : vérifier l'URL, se méfier de l'urgence, activer la double authentification…",
        "Aucune donnée sensible collectée : seules des informations techniques (IP, User-Agent) servent aux statistiques",
        "Filtrage des faux positifs : les clics des scanners de sécurité automatiques (Microsoft Defender, Outlook…) sont ignorés pour garder des statistiques fiables",
        "Clean Architecture en quatre couches (Domain, Application, Infrastructure, API) avec injection de dépendances, pour un code testable et maintenable",
        "Authentification JWT via Microsoft Entra ID et autorisation par rôles (utilisateur, administrateur)",
        "Envoi réel des emails par Microsoft Graph API (OAuth), avec un mode console de simulation pour les tests",
        "Pipelines CI/CD Azure DevOps en YAML : build et déploiement de la base séparés, environnements Développement et Production pilotés par la branche Git"
      ],
      technologies: ["C#", "ASP.NET Core", "Entity Framework Core", "SQL Server", "Microsoft Entra ID", "Microsoft Graph API", "Swagger / OpenAPI", "Azure DevOps", "Clean Architecture"],
      resultat: "Un outil complet déployé automatiquement en développement et en production, qui permet à l'entreprise de lancer ses propres campagnes de sensibilisation et d'obtenir des statistiques fiables grâce au filtrage des clics automatiques.",
    }
  ],

  // ---------- Parcours (du plus récent au plus ancien) ----------
  parcours: [
    {
      periode: "Depuis janvier 2026",
      titre: "Alternant développeur full-stack",
      lieu: "Command Strategy",
      description: "Projets web internes en production, campagne de phishing de sensibilisation, outil d'analyse d'inventaires."
    },
    {
      periode: "Janvier – avril 2025",
      titre: "Chef de projet IT et cybersécurité",
      lieu: "Thalia NeoMedia",
      description: "Gestion de projets de développement digital, dont des questionnaires de diagnostic numérique."
    },
    {
      periode: "Depuis septembre 2024",
      titre: "Cursus en alternance",
      lieu: "ESGI, Paris",
      description: "Développement web et API, réseaux, bases de données, sécurité et vulnérabilités informatiques."
    },
    {
      periode: "Avril – août 2024",
      titre: "Direction informatique, cybersécurité",
      lieu: "ARKEMA",
      description: "Rapport d'analyse des campagnes de phishing avec Power BI et Excel."
    },
    {
      periode: "2022",
      titre: "Baccalauréat, spécialités Mathématiques et NSI",
      lieu: "Lycée Jean-Jacques Rousseau, Montmorency",
      description: "Mention assez bien."
    }
  ],

  // ---------- Compétences ----------
  competences: [
    { categorie: "Cybersécurité", elements: ["Honeypot", "SIEM (Wazuh)", "Tests d'intrusion (Nmap, Hydra)", "Règles de détection", "MITRE ATT&CK", "Analyse de logs", "Threat intelligence", "Phishing et sensibilisation", "Certification ANSSI"] },
    { categorie: "Développement", elements: ["Python", "C# / .NET", "ASP.NET Core", "C", "JavaScript", "React", "PHP", "Flask", "HTML / CSS"] },
    { categorie: "Données", elements: ["SQL", "SQL Server", "Entity Framework Core", "Power BI", "Excel / VBA", "Knime (L1 et L2)"] },
    { categorie: "Systèmes et outils", elements: ["Linux (Debian)", "pfSense", "Ansible", "Docker", "VMware", "Git", "Azure DevOps (CI/CD)", "Microsoft Entra ID", "Bruno"] },
    { categorie: "Langues", elements: ["Anglais B2", "Espagnol A2"] }
  ]
};
