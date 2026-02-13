import { useStore } from '../../store/useStore';
import { transformations } from '../../data/transformations';

export function TransformationsIntroSlide() {
  const { theme } = useStore();
  const isDark = theme === 'dark';

  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-8">
      <div className="animate-ki-burst text-center mb-8">
        <span className="text-5xl mb-4 block">⚡</span>
        <h2 className={`text-3xl sm:text-5xl font-black mb-3 ${isDark ? 'text-white' : 'text-db-light-text'}`}>
          Les <span className="text-gradient-power">Transformations</span>
        </h2>
        <p className={`text-sm sm:text-base max-w-xl mx-auto ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
          Du Super Saiyan à l'Ultra Instinct, chaque transformation repousse les limites du possible.
        </p>
      </div>

      {/* Transformation level preview */}
      <div className="flex flex-wrap justify-center gap-3 max-w-3xl animate-slide-in-up">
        {transformations.map((t, i) => (
          <div
            key={t.id}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-transform hover:scale-105`}
            style={{
              borderColor: t.color,
              color: t.color,
              animationDelay: `${i * 100}ms`,
            }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: t.color }}
            />
            <span>{t.shortName}</span>
            <span className="opacity-50 text-xs">{t.multiplier}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
