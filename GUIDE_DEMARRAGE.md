# 🚀 Guide de Démarrage Rapide - Pokédex

## Déploiement sur GitHub Pages (Simple et Rapide)

### Étape 1 : Créer le repository sur GitHub

1. Allez sur https://github.com
2. Cliquez sur le bouton **"New"** (ou **"+"** > **"New repository"**)
3. Nommez votre repository : `pokedex-app` (ou un autre nom)
4. Laissez-le **Public**
5. ✅ Cochez **"Add a README file"**
6. Cliquez sur **"Create repository"**

### Étape 2 : Ajouter les fichiers

1. Dans votre repository, cliquez sur **"Add file"** > **"Upload files"**
2. Glissez-déposez ces fichiers :
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `.gitignore`
3. Cliquez sur **"Commit changes"**

### Étape 3 : Activer GitHub Pages

1. Dans votre repository, allez dans **Settings**
2. Dans le menu de gauche, cliquez sur **Pages**
3. Sous **"Source"**, sélectionnez :
   - Branch : `main`
   - Folder : `/ (root)`
4. Cliquez sur **Save**
5. Attendez 2-3 minutes ⏱️

### Étape 4 : Accéder à votre Pokédex

Votre application sera accessible à l'adresse :
```
https://votre-username.github.io/pokedex-app/
```

**C'est tout ! 🎉**

---

## 🖥️ Tester en Local (Sans GitHub)

### Option 1 : Double-cliquer sur index.html
1. Ouvrez le dossier contenant les fichiers
2. Double-cliquez sur `index.html`
3. L'application s'ouvre dans votre navigateur

### Option 2 : Avec un serveur local (recommandé)

**Avec Python :**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Avec Node.js :**
```bash
npx http-server
```

**Avec VS Code :**
1. Installez l'extension "Live Server"
2. Faites un clic droit sur `index.html`
3. Sélectionnez "Open with Live Server"

Puis ouvrez : http://localhost:8000

---

## 📱 Fonctionnalités Principales

✅ **151 Pokémon** de la première génération
✅ **Recherche** par nom ou numéro
✅ **Filtrage** par type (Feu, Eau, Plante, etc.)
✅ **Détails complets** : stats, évolutions, description
✅ **Favoris** sauvegardés dans le navigateur
✅ **Design responsive** : fonctionne sur mobile, tablette et ordinateur
✅ **Interface en français**

---

## 🎨 Aperçu des Fonctionnalités

### Page d'Accueil
- Grille de cartes colorées selon le type
- Chaque carte affiche : image, nom, type, poids et taille
- Animation au survol

### Modal de Détails (clic sur une carte)
- **Onglet "À propos"** : Description, taille, poids, capacités
- **Onglet "Stats"** : PV, Attaque, Défense, etc. avec barres de progression
- **Onglet "Évolution"** : Chaîne d'évolution complète

### Système de Favoris
- Cliquez sur le ❤️ pour ajouter/retirer des favoris
- Les favoris sont sauvegardés localement

---

## 🔧 Résolution de Problèmes

### Les Pokémon ne se chargent pas
- Vérifiez votre connexion internet
- L'API PokeAPI doit être accessible
- Ouvrez la console (F12) pour voir les erreurs

### Les images ne s'affichent pas
- Attendez quelques secondes, elles peuvent être lentes à charger
- Vérifiez votre connexion internet

### Le site ne s'affiche pas sur GitHub Pages
- Attendez 2-5 minutes après l'activation
- Vérifiez que les fichiers sont bien dans la branche `main`
- Le fichier doit s'appeler exactement `index.html`

---

## 📞 Support

Si vous rencontrez des problèmes :
1. Vérifiez que tous les fichiers sont présents
2. Consultez la console du navigateur (F12)
3. Assurez-vous que les noms de fichiers sont corrects (sensible à la casse)

---

## 🎯 Prochaines Améliorations Possibles

- [ ] Ajouter les générations suivantes
- [ ] Mode sombre/clair
- [ ] Comparaison de Pokémon
- [ ] Son lors des interactions
- [ ] Animations d'apparition
- [ ] Mode combat
- [ ] Statistiques globales

---

Bon développement ! 🚀
