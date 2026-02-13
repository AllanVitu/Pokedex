import { useStore } from '../../store/useStore';
import { concepts } from '../../data/concepts';

export function ConceptsIntroSlide() {
  const { theme } = useStore();
  const isDark = theme === 'dark';

  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-8">
      <div className="animate-ki-burst text-center mb-8">
        <span className="text-5xl mb-4 block">🌍</span>
        <h2 className={`text-3xl sm:text-5xl font-black mb-3 ${isDark ? 'text-white' : 'text-db-light-text'}`}>
          Univers & <span className="text-gradient-gold">Concepts</span>
        </h2>
        <p className={`text-sm sm:text-base max-w-xl mx-auto ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
          Le Ki, les Dragon Balls, les capsules Hoi Poi... L'univers de Dragon Ball regorge de concepts fascinants.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl w-full animate-slide-in-up">
        {concepts.slice(0, 8).map((concept) => (
          <div
            key={concept.id}
            className={`rounded-xl p-4 text-center transition-transform hover:scale-105 ${
              isDark ? 'bg-white/5 border border-white/10' : 'bg-gray-50 border border-gray-200'
            }`}
          >
            <span className="text-3xl block mb-2">{concept.icon}</span>
            <h3 className={`text-xs font-bold ${isDark ? 'text-white' : 'text-db-light-text'}`}>
              {concept.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
