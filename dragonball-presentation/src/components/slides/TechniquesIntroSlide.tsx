import { useStore } from '../../store/useStore';
import { techniques } from '../../data/techniques';

export function TechniquesIntroSlide() {
  const { theme } = useStore();
  const isDark = theme === 'dark';

  const iconicTechniques = techniques.filter((t) => t.iconic);

  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-8">
      <div className="animate-ki-burst text-center mb-8">
        <span className="text-5xl mb-4 block">💥</span>
        <h2 className={`text-3xl sm:text-5xl font-black mb-3 ${isDark ? 'text-white' : 'text-db-light-text'}`}>
          Techniques <span className="text-gradient-power">Cultes</span>
        </h2>
        <p className={`text-sm sm:text-base max-w-xl mx-auto ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
          Kamehameha, Final Flash, Genki Dama... Les attaques qui ont défini des générations de fans.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 max-w-2xl animate-slide-in-up">
        {iconicTechniques.map((t, i) => (
          <div
            key={t.id}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-transform hover:scale-105 ${
              isDark ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200'
            }`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <span style={{ color: t.color }}>{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
