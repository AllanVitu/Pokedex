import { useStore } from '../../store/useStore';
import { techniques } from '../../data/techniques';

export function TechniquesShowcaseSlide() {
  const { theme } = useStore();
  const isDark = theme === 'dark';

  const typeLabels: Record<string, string> = {
    ki_blast: 'Ki Blast',
    physical: 'Physique',
    support: 'Support',
    special: 'Spécial',
  };

  return (
    <div className="flex flex-col h-full px-4 sm:px-8 py-6 overflow-y-auto">
      <h2 className={`text-2xl sm:text-3xl font-black text-center mb-6 ${isDark ? 'text-white' : 'text-db-light-text'}`}>
        Arsenal des <span className="text-gradient-power">Guerriers</span>
      </h2>

      <div className="max-w-3xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
        {techniques.map((t, i) => (
          <div
            key={t.id}
            className={`rounded-xl p-4 animate-slide-in-up transition-transform hover:scale-[1.02] ${
              isDark ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200'
            }`}
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-db-light-text'}`} style={{ color: t.color }}>
                  {t.name}
                </h3>
                {t.japaneseName && (
                  <span className={`text-xs ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
                    {t.japaneseName}
                  </span>
                )}
              </div>
              <span
                className="text-xs px-2 py-0.5 rounded-full font-medium"
                style={{ backgroundColor: `${t.color}20`, color: t.color }}
              >
                {typeLabels[t.type]}
              </span>
            </div>

            <p className={`text-xs mb-2 ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
              {t.user}
            </p>

            {/* Power dots */}
            <div className="flex items-center gap-1 mb-2">
              <span className="text-xs opacity-50 mr-1">PWR</span>
              {Array.from({ length: 10 }).map((_, pi) => (
                <div
                  key={pi}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{
                    backgroundColor: pi < t.power ? t.color : isDark ? '#1a1a2e' : '#e5e7eb',
                    boxShadow: pi < t.power ? `0 0 4px ${t.color}60` : 'none',
                  }}
                />
              ))}
            </div>

            <p className={`text-xs leading-relaxed line-clamp-2 ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
              {t.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
