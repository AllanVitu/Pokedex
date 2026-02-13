import { useStore } from '../../store/useStore';
import { concepts } from '../../data/concepts';

export function ConceptsDetailsSlide() {
  const { theme } = useStore();
  const isDark = theme === 'dark';

  const categoryLabel: Record<string, string> = {
    energy: 'Énergie',
    item: 'Objet',
    event: 'Événement',
    place: 'Lieu',
  };

  return (
    <div className="flex flex-col h-full px-4 sm:px-8 py-6 overflow-y-auto">
      <h2 className={`text-2xl sm:text-3xl font-black text-center mb-6 ${isDark ? 'text-white' : 'text-db-light-text'}`}>
        Les Concepts <span className="text-gradient-gold">Clés</span>
      </h2>

      <div className="max-w-3xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
        {concepts.map((concept, i) => (
          <div
            key={concept.id}
            className={`rounded-xl p-4 animate-slide-in-up ${
              isDark ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200'
            }`}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{concept.icon}</span>
              <div>
                <h3 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-db-light-text'}`}>
                  {concept.name}
                </h3>
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: `${concept.color}20`, color: concept.color }}
                >
                  {categoryLabel[concept.category]}
                </span>
              </div>
            </div>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
              {concept.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
