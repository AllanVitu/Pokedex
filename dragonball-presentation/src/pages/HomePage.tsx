import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { Play, Brain, Settings, Info, Star } from 'lucide-react';

export function HomePage() {
  const navigate = useNavigate();
  const { theme, bestScore, favorites } = useStore();
  const isDark = theme === 'dark';

  const menuItems = [
    {
      icon: Play,
      label: 'Lancer la présentation',
      desc: 'Parcourir toutes les slides',
      path: '/presentation',
      color: '#f5a623',
      primary: true,
    },
    {
      icon: Brain,
      label: 'Quiz Dragon Ball',
      desc: bestScore > 0 ? `Meilleur score: ${bestScore}/15` : 'Testez vos connaissances',
      path: '/quiz',
      color: '#00b4d8',
    },
    {
      icon: Star,
      label: 'Mes favoris',
      desc: `${favorites.length} slide(s) marquée(s)`,
      path: '/favorites',
      color: '#f5a623',
    },
    {
      icon: Settings,
      label: 'Paramètres',
      desc: 'Thème, auto-play, export',
      path: '/settings',
      color: '#7b2cbf',
    },
    {
      icon: Info,
      label: 'À propos',
      desc: 'Crédits et informations',
      path: '/about',
      color: '#06d6a0',
    },
  ];

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'bg-db-dark text-db-text' : 'bg-db-light-bg text-db-light-text'}`}>
      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-db-gold/5 blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-db-blue/5 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-1/3 w-40 h-40 rounded-full bg-db-red/5 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 text-center animate-ki-burst">
          {/* Logo */}
          <div className="w-24 h-24 mx-auto mb-6 rounded-full gradient-gold flex items-center justify-center shadow-lg shadow-db-gold/30 animate-ki-glow">
            <span className="text-4xl">🟠</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black mb-2 tracking-tight">
            <span className="text-gradient-gold">DRAGON</span>{' '}
            <span>BALL</span>
          </h1>
          <p className={`text-base sm:text-lg font-light mb-8 ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
            La Présentation Interactive
          </p>
        </div>

        {/* Menu */}
        <div className="relative z-10 w-full max-w-md space-y-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] text-left ${
                  item.primary
                    ? 'gradient-gold text-black shadow-lg shadow-db-gold/20'
                    : isDark
                      ? 'bg-db-surface hover:bg-db-surface-light border border-white/10'
                      : 'bg-white hover:bg-gray-50 border border-gray-200 shadow-sm'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    item.primary ? 'bg-black/20' : ''
                  }`}
                  style={!item.primary ? { backgroundColor: `${item.color}20` } : undefined}
                >
                  <Icon size={20} style={!item.primary ? { color: item.color } : undefined} />
                </div>
                <div className="flex-1">
                  <p className={`font-semibold text-sm ${item.primary ? '' : ''}`}>{item.label}</p>
                  <p className={`text-xs ${item.primary ? 'opacity-70' : isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
                    {item.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <footer className={`text-center py-4 text-xs ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
        Dragon Ball Presentation &mdash; React + TypeScript + Tailwind
      </footer>
    </div>
  );
}
