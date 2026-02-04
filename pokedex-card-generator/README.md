# Pokédex Card Generator (Gen 1)

This generates **151 JPEG cards** from a single HTML/CSS/JS template (iOS-oriented look), and packs them into a ZIP.

## Requirements
- Node.js 18+ recommended
- npm

## Install
```bash
npm install
```

## Render (iOS mobile preset)
```bash
npm run render:mobile
```
Outputs:
- `out/mobile/*.jpg`
- `pokedex_cards_gen1_mobile.zip`

## Render (desktop preset)
```bash
npm run render:desktop
```
Outputs:
- `out/desktop/*.jpg`
- `pokedex_cards_gen1_desktop.zip`

## Add real Pokémon images (optional)
Open `data/pokemon151.json` and set `"image"` for each Pokémon to:
- a local file path (relative to project root) e.g. `assets/001.png`
- or an URL

If `image` is null, the card uses a clean monogram placeholder (still looks premium).

## Customize UI
- `web/style.css` for styling
- `web/template.html` for layout
- `web/app.js` for type colors and binding
