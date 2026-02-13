import { slideList, chapters } from '../data/slides';
import { sagas } from '../data/sagas';
import { characters } from '../data/characters';
import { transformations } from '../data/transformations';
import { techniques } from '../data/techniques';
import { concepts } from '../data/concepts';
import { quizQuestions } from '../data/quiz';

export function exportToJSON() {
  const data = {
    title: 'Dragon Ball Presentation',
    exportedAt: new Date().toISOString(),
    slides: slideList,
    chapters,
    content: {
      sagas,
      characters,
      transformations,
      techniques,
      concepts,
      quiz: quizQuestions,
    },
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: 'application/json',
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'dragonball-presentation.json';
  a.click();
  URL.revokeObjectURL(url);
}

export function exportToHTML() {
  const html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Dragon Ball Presentation - Export</title>
  <style>
    body { font-family: system-ui; background: #0a0a0f; color: #e8e8e8; max-width: 800px; margin: 0 auto; padding: 2rem; }
    h1 { color: #f5a623; text-align: center; font-size: 2rem; }
    h2 { color: #00b4d8; border-bottom: 2px solid #1a1a2e; padding-bottom: 0.5rem; margin-top: 2rem; }
    h3 { color: #f5a623; }
    .card { background: #12121f; border-radius: 12px; padding: 1rem; margin: 0.5rem 0; border: 1px solid #1a1a2e; }
    .stat-bar { background: #1a1a2e; height: 8px; border-radius: 4px; overflow: hidden; margin: 2px 0; }
    .stat-fill { height: 100%; border-radius: 4px; }
    .tag { display: inline-block; background: #1a1a2e; padding: 2px 8px; border-radius: 6px; margin: 2px; font-size: 0.85rem; }
  </style>
</head>
<body>
  <h1>Dragon Ball Presentation</h1>

  <h2>Sagas</h2>
  ${sagas.map(s => `
  <div class="card">
    <h3>${s.title} (${s.yearStart}-${s.yearEnd})</h3>
    <p>${s.description}</p>
    <p>${s.arcs.map(a => `<span class="tag">${a}</span>`).join(' ')}</p>
  </div>`).join('')}

  <h2>Personnages</h2>
  ${characters.map(c => `
  <div class="card">
    <h3>${c.name}${c.alias ? ` — ${c.alias}` : ''}</h3>
    <p><em>${c.race}</em></p>
    <p>${c.description}</p>
    ${c.stats.map(s => `
    <div style="display:flex;align-items:center;gap:8px;margin:4px 0">
      <span style="width:100px;font-size:0.85rem">${s.label}</span>
      <div class="stat-bar" style="flex:1"><div class="stat-fill" style="width:${s.value}%;background:${c.color}"></div></div>
      <span style="font-size:0.85rem">${s.value}</span>
    </div>`).join('')}
  </div>`).join('')}

  <h2>Transformations</h2>
  ${transformations.map(t => `
  <div class="card">
    <h3>${t.name} (${t.multiplier})</h3>
    <p>${t.description}</p>
    <p><em>Premier utilisateur: ${t.firstUser} — ${t.firstAppearance}</em></p>
  </div>`).join('')}

  <h2>Techniques</h2>
  ${techniques.map(t => `
  <div class="card">
    <h3>${t.name}${t.japaneseName ? ` (${t.japaneseName})` : ''}</h3>
    <p><em>${t.user}</em></p>
    <p>${t.description}</p>
  </div>`).join('')}
</body>
</html>`;

  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'dragonball-presentation.html';
  a.click();
  URL.revokeObjectURL(url);
}
