# Pokédex - Application Web

Une application web interactive présentant les 151 premiers Pokémon avec un design moderne inspiré des cartes Pokémon.

## 🎮 Fonctionnalités

- ✨ Affichage de tous les 151 premiers Pokémon
- 🎨 Design moderne avec cartes colorées selon le type
- 🔍 Recherche par nom ou numéro
- 🏷️ Filtrage par type de Pokémon
- 📊 Statistiques détaillées de chaque Pokémon
- 🔄 Chaînes d'évolution
- ❤️ Système de favoris (sauvegarde locale)
- 📱 Interface responsive (mobile, tablette, desktop)
- 🌐 Noms et descriptions en français

## 🚀 Technologies utilisées

- HTML5
- CSS3 (avec animations et gradients)
- JavaScript (ES6+)
- PokeAPI (https://pokeapi.co/)

## 📦 Installation locale

1. Clonez le repository :
```bash
git clone https://github.com/votre-username/pokedex-app.git
```

2. Ouvrez le fichier `index.html` dans votre navigateur

Aucune installation de dépendances n'est nécessaire !

## 🌐 Déploiement sur GitHub Pages

### Méthode 1 : Via l'interface GitHub

1. Créez un nouveau repository sur GitHub
2. Uploadez tous les fichiers (index.html, styles.css, script.js, README.md)
3. Allez dans Settings > Pages
4. Sélectionnez la branche `main` et le dossier `/ (root)`
5. Cliquez sur Save
6. Votre site sera disponible à : `https://votre-username.github.io/pokedex-app/`

### Méthode 2 : Via Git en ligne de commande

```bash
# Initialisez le repository
git init

# Ajoutez tous les fichiers
git add .

# Faites un commit
git commit -m "Initial commit - Pokédex application"

# Ajoutez le repository distant
git remote add origin https://github.com/votre-username/pokedex-app.git

# Poussez vers GitHub
git branch -M main
git push -u origin main

# Activez GitHub Pages dans les paramètres du repository
```

## 📱 Utilisation

1. **Page d'accueil** : Visualisez tous les Pokémon sous forme de cartes
2. **Recherche** : Tapez un nom ou un numéro dans la barre de recherche
3. **Filtre** : Sélectionnez un type pour filtrer les Pokémon
4. **Détails** : Cliquez sur une carte pour voir les détails complets
5. **Favoris** : Cliquez sur le cœur pour ajouter/retirer des favoris
6. **Évolutions** : Consultez la chaîne d'évolution dans l'onglet "Évolution"

## 🎨 Personnalisation

### Modifier le nombre de Pokémon

Dans `script.js`, modifiez la constante :
```javascript
const TOTAL_POKEMON = 151; // Changez cette valeur
```

### Modifier les couleurs des types

Dans `styles.css`, éditez les variables CSS :
```css
:root {
    --water: #4A90E2;
    --fire: #F08030;
    /* ... autres couleurs */
}
```

## 📊 Structure du projet

```
pokedex-app/
│
├── index.html          # Page principale
├── styles.css          # Styles et animations
├── script.js           # Logique de l'application
└── README.md          # Documentation
```

## 🔧 Compatibilité

- ✅ Chrome (dernière version)
- ✅ Firefox (dernière version)
- ✅ Safari (dernière version)
- ✅ Edge (dernière version)
- ✅ Mobile (iOS & Android)

## 📝 Crédits

- **API** : [PokéAPI](https://pokeapi.co/)
- **Images** : Official Pokémon artwork
- **Design** : Inspiré des jeux Pokémon modernes

## 📄 Licence

Ce projet est sous licence MIT. Libre d'utilisation à des fins éducatives.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Proposer de nouvelles fonctionnalités
- Améliorer le code

## 📞 Contact

Pour toute question ou suggestion, ouvrez une issue sur GitHub.

---

Développé avec ❤️ pour les fans de Pokémon
