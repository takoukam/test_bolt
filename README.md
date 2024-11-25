# SABC EASY-PAY PLATFORM

Application web de digitalisation des caisses de dépenses pour SABC (Société Anonyme des Brasseries du Cameroun).

## 🎯 Objectif

Gérer les paiements de manière sécurisée en évitant les erreurs humaines et les risques liés à la manipulation de liquidités. L'application s'intègre avec les plateformes de paiement mobile (MTN Money, Orange Money) et offre une interface ergonomique pour la gestion des dépenses.

## 🚀 Fonctionnalités principales

- Authentification via Active Directory (AD)
- Gestion des rôles utilisateurs (admin technique, caissier, approbateur, etc.)
- Intégration avec les systèmes ERP (M3) et SIRH
- Gestion des ordres de paiement (OP)
- Calcul automatique des frais
- Workflow de validation
- Paiements automatisés via API
- Audit et reporting
- Tableaux de bord et statistiques

## 🛠 Prérequis techniques

- Node.js (v18+)
- npm ou yarn
- Un éditeur de code (VSCode recommandé)

## 📦 Installation

1. Cloner le projet
```bash
git clone [url-du-repo]
cd sabc-easy-pay
```

2. Installer les dépendances
```bash
npm install
```

3. Lancer le serveur de développement
```bash
npm run dev
```

## 🏗 Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── Header.tsx      # En-tête de l'application
│   └── Sidebar.tsx     # Barre de navigation latérale
├── pages/              # Pages de l'application
├── services/           # Services (API, auth, etc.)
├── types/              # Types TypeScript
├── utils/              # Utilitaires
├── App.tsx             # Composant racine
└── main.tsx           # Point d'entrée
```

## 🔒 Sécurité

- Authentification via Active Directory
- Gestion des rôles et permissions
- Analyse de sécurité via My-CoolPay Security Scan (MCPSS)
- Validation des transactions

## 🔄 Workflow de développement

1. Créer une nouvelle branche pour chaque fonctionnalité
```bash
git checkout -b feature/nom-de-la-feature
```

2. Suivre les conventions de commit
```
feat: ajoute une nouvelle fonctionnalité
fix: corrige un bug
docs: met à jour la documentation
style: modifications de style (pas de changement fonctionnel)
refactor: refactorisation du code
test: ajout ou modification de tests
```

3. Créer une Pull Request pour review

## 📊 Monitoring et logs

- Journalisation des opérations
- Suivi des erreurs
- Métriques de performance
- Tableaux de bord d'administration

## 🧪 Tests

```bash
# Exécuter les tests unitaires
npm run test

# Exécuter les tests avec couverture
npm run test:coverage
```

## 📱 Intégrations

- MTN Mobile Money
- Orange Money
- Système ERP M3
- SIRH
- Active Directory

## 🌐 Environnements

- Développement: `http://localhost:5173`
- Recette: [URL-RECETTE]
- Production: [URL-PROD]

## 📄 Documentation additionnelle

- [Guide d'utilisation](docs/user-guide.md)
- [Documentation API](docs/api.md)
- [Architecture technique](docs/architecture.md)

## 👥 Support

Pour toute question ou problème :
- Créer une issue sur le repo
- Contacter l'équipe technique à [email]

## 📝 License

Copyright © 2024 SABC. Tous droits réservés.