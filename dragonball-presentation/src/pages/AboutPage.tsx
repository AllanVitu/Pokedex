import { useStore } from '../store/useStore';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function AboutPage() {
  const { theme } = useStore();
  const isDark = theme === 'dark';
  const navigate = useNavigate();

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
          À propos
        </h1>
      </header>

      <div className="flex-1 p-4 max-w-lg mx-auto w-full">
        <div className="text-center py-8">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full gradient-gold flex items-center justify-center shadow-lg">
            <span className="text-3xl">🟠</span>
          </div>
          <h2 className={`text-2xl font-black mb-1 ${isDark ? 'text-white' : 'text-db-light-text'}`}>
            Dragon Ball Presentation
          </h2>
          <p className={`text-sm ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>v1.0.0</p>
        </div>

        <div className={`space-y-4 rounded-xl p-4 ${isDark ? 'bg-db-surface' : 'bg-white shadow-sm'}`}>
          <div>
            <h3 className={`text-sm font-bold mb-1 ${isDark ? 'text-db-gold' : 'text-db-blue-deep'}`}>Description</h3>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
              Application de présentation interactive dédiée à l'univers Dragon Ball.
              Explorez les sagas, personnages, transformations et techniques cultes
              à travers une expérience immersive.
            </p>
          </div>

          <div>
            <h3 className={`text-sm font-bold mb-1 ${isDark ? 'text-db-gold' : 'text-db-blue-deep'}`}>Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {['React 19', 'TypeScript', 'Vite', 'Tailwind CSS 4', 'Zustand', 'React Router', 'Lucide Icons'].map((tech) => (
                <span
                  key={tech}
                  className={`text-xs px-3 py-1 rounded-full ${
                    isDark ? 'bg-white/5 text-db-text-muted' : 'bg-gray-100 text-db-light-muted'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className={`text-sm font-bold mb-1 ${isDark ? 'text-db-gold' : 'text-db-blue-deep'}`}>Fonctionnalités</h3>
            <ul className={`text-sm space-y-1 ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
              <li>Présentation interactive avec navigation clavier et swipe</li>
              <li>Thème clair/sombre avec mémorisation</li>
              <li>Mode présentateur avec preview</li>
              <li>Recherche de slides</li>
              <li>Système de favoris</li>
              <li>Auto-play avec timer configurable</li>
              <li>Quiz avec scoring et historique</li>
              <li>Export JSON et HTML</li>
              <li>Mode plein écran</li>
              <li>Responsive mobile-first</li>
            </ul>
          </div>

          <div>
            <h3 className={`text-sm font-bold mb-1 ${isDark ? 'text-db-gold' : 'text-db-blue-deep'}`}>Crédits</h3>
            <p className={`text-sm ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
              Dragon Ball est une oeuvre originale d'Akira Toriyama.
              Cette application est un projet de présentation non-commercial à but éducatif.
              Aucune image sous copyright n'est utilisée.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
