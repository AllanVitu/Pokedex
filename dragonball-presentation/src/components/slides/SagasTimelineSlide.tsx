import { useStore } from '../../store/useStore';
import { sagas } from '../../data/sagas';

export function SagasTimelineSlide() {
  const { theme } = useStore();
  const isDark = theme === 'dark';

  return (
    <div className="flex flex-col h-full px-4 sm:px-8 py-6 overflow-y-auto">
      <h2 className={`text-2xl sm:text-3xl font-black text-center mb-6 ${isDark ? 'text-white' : 'text-db-light-text'}`}>
        La <span className="text-gradient-gold">Timeline</span> Dragon Ball
      </h2>

      <div className="relative max-w-3xl mx-auto w-full flex-1">
        {/* Vertical line */}
        <div className={`absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 ${isDark ? 'bg-white/10' : 'bg-gray-200'}`} />

        {sagas.map((saga, i) => (
          <div
            key={saga.id}
            className="relative pl-16 sm:pl-20 mb-8 animate-slide-in-right"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            {/* Timeline dot */}
            <div
              className="absolute left-4 sm:left-6 w-5 h-5 rounded-full border-4 z-10"
              style={{
                backgroundColor: saga.color,
                borderColor: isDark ? '#12121f' : '#ffffff',
              }}
            />

            {/* Year badge */}
            <div
              className="inline-block px-3 py-0.5 rounded-full text-xs font-bold text-white mb-2"
              style={{ backgroundColor: saga.color }}
            >
              {saga.yearStart} — {saga.yearEnd}
            </div>

            <div
              className={`rounded-xl p-4 ${
                isDark ? 'bg-white/5 border border-white/10' : 'bg-gray-50 border border-gray-200'
              }`}
            >
              <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-db-light-text'}`}>
                {saga.title}
              </h3>
              <p className={`text-sm mb-3 leading-relaxed ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
                {saga.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {saga.arcs.map((arc) => (
                  <span
                    key={arc}
                    className="text-xs px-2 py-0.5 rounded-md"
                    style={{
                      backgroundColor: `${saga.color}20`,
                      color: saga.color,
                    }}
                  >
                    {arc}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
