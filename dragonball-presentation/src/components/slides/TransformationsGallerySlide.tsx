import { useStore } from '../../store/useStore';
import { transformations } from '../../data/transformations';

export function TransformationsGallerySlide() {
  const { theme } = useStore();
  const isDark = theme === 'dark';

  return (
    <div className="flex flex-col h-full px-4 sm:px-8 py-6 overflow-y-auto">
      <h2 className={`text-2xl sm:text-3xl font-black text-center mb-6 ${isDark ? 'text-white' : 'text-db-light-text'}`}>
        Échelle de <span className="text-gradient-power">Puissance</span>
      </h2>

      <div className="max-w-3xl mx-auto w-full space-y-3">
        {transformations.map((t, i) => {
          const barWidth = Math.min(20 + (i / (transformations.length - 1)) * 80, 100);

          return (
            <div
              key={t.id}
              className={`rounded-xl p-4 animate-slide-in-right ${
                isDark ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200'
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-2">
                {/* Aura circle */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black text-white shadow-lg flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${t.gradient[0]}, ${t.gradient[1]})`,
                    boxShadow: `0 0 15px ${t.color}40`,
                  }}
                >
                  {t.shortName.slice(0, 3)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className={`text-sm font-bold truncate ${isDark ? 'text-white' : 'text-db-light-text'}`}>
                      {t.name}
                    </h3>
                    <span
                      className="text-xs font-mono px-2 py-0.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: `${t.color}20`, color: t.color }}
                    >
                      {t.multiplier}
                    </span>
                  </div>
                  <p className={`text-xs ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
                    {t.firstUser} — {t.firstAppearance}
                  </p>
                </div>
              </div>

              {/* Power bar */}
              <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-white/5' : 'bg-gray-100'}`}>
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${barWidth}%`,
                    background: `linear-gradient(90deg, ${t.gradient[0]}, ${t.gradient[1]})`,
                    boxShadow: `0 0 8px ${t.color}60`,
                  }}
                />
              </div>

              <p className={`text-xs mt-2 leading-relaxed line-clamp-2 ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
                {t.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
