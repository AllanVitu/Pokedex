# Dragon Ball Presentation

Application web interactive de présentation sur l'univers Dragon Ball. Parcourez les sagas, personnages, transformations et techniques cultes via une interface moderne et immersive.

## Stack technique

- **React 19** + **TypeScript**
- **Vite 7** (build ultra-rapide)
- **Tailwind CSS 4** (styling utilitaire)
- **Zustand** (state management léger)
- **React Router 7** (navigation SPA)
- **Lucide React** (icônes)

Zero backend requis. Tout fonctionne en local.

## Installation

```bash
cd dragonball-presentation
npm install
npm run dev
```

## Scripts

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build TypeScript + Vite production |
| `npm run preview` | Preview du build production |
| `npm run lint` | Lint ESLint |

## Structure du projet

```
src/
├── components/
│   ├── layout/       # Sidebar, Toolbar, SearchModal, ExportModal
│   ├── quiz/         # QuizEngine
│   ├── slides/       # Composants de slides + SlideRenderer
│   └── ui/           # ProgressBar, StatBar, CharacterAvatar, PowerBadge
├── data/             # Données (sagas, characters, transformations, techniques, concepts, quiz, slides)
├── hooks/            # useKeyboard, useSwipe, useAutoPlay
├── pages/            # HomePage, PresentationPage, QuizPage, FavoritesPage, SettingsPage, AboutPage
├── store/            # Zustand store (theme, favoris, quiz, navigation)
├── styles/           # CSS global + animations
└── utils/            # Export JSON/HTML
```

## Fonctionnalités

### Présentation
- 13 slides, 8 chapitres
- Navigation clavier, swipe, clic
- Barre de progression, sommaire interactif
- Mode plein écran, auto-play, mode présentateur

### Contenu
- Histoire & Sagas (DB, DBZ, DBGT, DBS) avec timeline
- 10 personnages avec fiches et stats
- 10 transformations (Oozaru > Ultra Instinct)
- 8 concepts (Ki, Dragon Balls, Capsules...)
- 12 techniques cultes avec power rating

### Quiz
- 15 questions, 3 niveaux de difficulté
- Score temps réel, correction, meilleur score persisté

### Outils
- Recherche textuelle, favoris, export JSON/HTML
- Thème clair/sombre (localStorage)

## Raccourcis clavier

| Touche | Action |
|--------|--------|
| Flèches / Espace | Navigation |
| `F` | Plein écran |
| `T` | Toggle thème |
| `Home` / `End` | Première / Dernière slide |
