import { useStore } from '../../store/useStore';
import { sagas } from '../../data/sagas';

export function SagasIntroSlide() {
  const { theme } = useStore();
  const isDark = theme === 'dark';

  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-8">
      <div className="animate-ki-burst text-center mb-8">
        <span className="text-5xl mb-4 block">📜</span>
        <h2 className={`text-3xl sm:text-5xl font-black mb-3 ${isDark ? 'text-white' : 'text-db-light-text'}`}>
          Histoire & <span className="text-gradient-gold">Sagas</span>
        </h2>
        <p className={`text-sm sm:text-base max-w-xl mx-auto ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
          De 1986 à aujourd'hui, Dragon Ball a traversé les générations avec des sagas épiques et des arcs narratifs inoubliables.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl w-full animate-slide-in-up">
        {sagas.map((saga) => (
          <div
            key={saga.id}
            className={`rounded-xl p-4 text-center transition-transform hover:scale-105 ${
              isDark ? 'bg-white/5 border border-white/10' : 'bg-gray-50 border border-gray-200'
            }`}
          >
            <div
              className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-xs"
              style={{ backgroundColor: saga.color }}
            >
              {saga.series}
            </div>
            <h3 className={`text-sm font-bold mb-1 ${isDark ? 'text-white' : 'text-db-light-text'}`}>
              {saga.title}
            </h3>
            <p className={`text-xs ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
              {saga.yearStart}–{saga.yearEnd}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
