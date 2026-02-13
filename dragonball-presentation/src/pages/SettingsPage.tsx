import { useStore } from '../store/useStore';
import { ArrowLeft, Sun, Moon, Timer, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { exportToJSON, exportToHTML } from '../utils/export';

export function SettingsPage() {
  const {
    theme,
    toggleTheme,
    autoPlayInterval,
    setAutoPlayInterval,
    bestScore,
  } = useStore();
  const isDark = theme === 'dark';
  const navigate = useNavigate();

  const intervals = [
    { label: '3s', value: 3000 },
    { label: '5s', value: 5000 },
    { label: '8s', value: 8000 },
    { label: '10s', value: 10000 },
    { label: '15s', value: 15000 },
  ];

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'bg-db-dark text-db-text' : 'bg-db-light-bg text-db-light-text'}`}>
      <header className={`flex items-center gap-3 px-4 py-3 border-b ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
        <button
          onClick={() => navigate('/')}
          className={`p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}
          aria-label="Retour"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className={`text-lg font-bold ${isDark ? 'text-db-gold' : 'text-db-blue-deep'}`}>
          Paramètres
        </h1>
      </header>

      <div className="flex-1 p-4 max-w-lg mx-auto w-full space-y-6">
        {/* Theme */}
        <section className={`rounded-xl p-4 ${isDark ? 'bg-db-surface' : 'bg-white shadow-sm'}`}>
          <h2 className={`text-sm font-bold mb-3 flex items-center gap-2 ${isDark ? 'text-white' : 'text-db-light-text'}`}>
            {isDark ? <Moon size={16} /> : <Sun size={16} />}
            Thème
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => { if (theme !== 'dark') toggleTheme(); }}
              className={`flex-1 py-3 rounded-lg text-sm font-medium transition-all ${
                isDark ? 'bg-db-gold text-black' : 'bg-white/10 border border-white/10'
              }`}
            >
              Sombre
            </button>
            <button
              onClick={() => { if (theme !== 'light') toggleTheme(); }}
              className={`flex-1 py-3 rounded-lg text-sm font-medium transition-all ${
                !isDark ? 'bg-db-blue-deep text-white' : 'bg-white/10 border border-white/10'
              }`}
            >
              Clair
            </button>
          </div>
        </section>

        {/* Auto-play interval */}
        <section className={`rounded-xl p-4 ${isDark ? 'bg-db-surface' : 'bg-white shadow-sm'}`}>
          <h2 className={`text-sm font-bold mb-3 flex items-center gap-2 ${isDark ? 'text-white' : 'text-db-light-text'}`}>
            <Timer size={16} />
            Intervalle auto-play
          </h2>
          <div className="flex gap-2">
            {intervals.map((int) => (
              <button
                key={int.value}
                onClick={() => setAutoPlayInterval(int.value)}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                  autoPlayInterval === int.value
                    ? 'gradient-gold text-black'
                    : isDark
                      ? 'bg-white/5 hover:bg-white/10 border border-white/10'
                      : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {int.label}
              </button>
            ))}
          </div>
        </section>

        {/* Export */}
        <section className={`rounded-xl p-4 ${isDark ? 'bg-db-surface' : 'bg-white shadow-sm'}`}>
          <h2 className={`text-sm font-bold mb-3 flex items-center gap-2 ${isDark ? 'text-white' : 'text-db-light-text'}`}>
            <Download size={16} />
            Exporter
          </h2>
          <div className="flex gap-2">
            <button
              onClick={exportToJSON}
              className={`flex-1 py-3 rounded-lg text-sm font-medium transition-all ${
                isDark ? 'bg-white/5 hover:bg-white/10 border border-white/10' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              Export JSON
            </button>
            <button
              onClick={exportToHTML}
              className={`flex-1 py-3 rounded-lg text-sm font-medium transition-all ${
                isDark ? 'bg-white/5 hover:bg-white/10 border border-white/10' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              Export HTML
            </button>
          </div>
        </section>

        {/* Stats */}
        <section className={`rounded-xl p-4 ${isDark ? 'bg-db-surface' : 'bg-white shadow-sm'}`}>
          <h2 className={`text-sm font-bold mb-3 ${isDark ? 'text-white' : 'text-db-light-text'}`}>
            Statistiques
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <div className={`rounded-lg p-3 text-center ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
              <p className="text-2xl font-black text-db-gold">{bestScore}</p>
              <p className={`text-xs ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>Meilleur score quiz</p>
            </div>
            <div className={`rounded-lg p-3 text-center ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
              <p className="text-2xl font-black text-db-blue">{useStore.getState().favorites.length}</p>
              <p className={`text-xs ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>Slides favorites</p>
            </div>
          </div>
        </section>

        {/* Keyboard shortcuts */}
        <section className={`rounded-xl p-4 ${isDark ? 'bg-db-surface' : 'bg-white shadow-sm'}`}>
          <h2 className={`text-sm font-bold mb-3 ${isDark ? 'text-white' : 'text-db-light-text'}`}>
            Raccourcis clavier
          </h2>
          <div className="space-y-2 text-sm">
            {[
              ['Flèches / Espace', 'Navigation'],
              ['F', 'Plein écran'],
              ['T', 'Thème clair/sombre'],
              ['Home / End', 'Première / Dernière slide'],
            ].map(([key, desc]) => (
              <div key={key} className="flex items-center justify-between">
                <span className={isDark ? 'text-db-text-muted' : 'text-db-light-muted'}>{desc}</span>
                <kbd className={`px-2 py-0.5 rounded text-xs font-mono ${isDark ? 'bg-white/10' : 'bg-gray-100'}`}>
                  {key}
                </kbd>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
