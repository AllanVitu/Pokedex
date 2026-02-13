import { useStore } from '../../store/useStore';

export function QuizIntroSlide() {
  const { theme, bestScore } = useStore();
  const isDark = theme === 'dark';

  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-8">
      <div className="animate-ki-burst text-center">
        <span className="text-5xl mb-4 block">🧠</span>
        <h2 className={`text-3xl sm:text-5xl font-black mb-3 ${isDark ? 'text-white' : 'text-db-light-text'}`}>
          Quiz <span className="text-gradient-gold">Dragon Ball</span>
        </h2>
        <p className={`text-sm sm:text-base max-w-xl mx-auto mb-8 ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
          Testez vos connaissances sur l'univers Dragon Ball ! 15 questions vous attendent.
        </p>

        {bestScore > 0 && (
          <div className={`inline-block px-6 py-3 rounded-xl mb-6 ${
            isDark ? 'bg-db-gold/10 border border-db-gold/30' : 'bg-yellow-50 border border-yellow-200'
          }`}>
            <p className={`text-sm ${isDark ? 'text-db-gold' : 'text-yellow-700'}`}>
              Meilleur score : <span className="font-bold text-lg">{bestScore}/15</span>
            </p>
          </div>
        )}

        <p className={`text-sm ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
          Rendez-vous dans la section Quiz du menu pour jouer !
        </p>
      </div>
    </div>
  );
}
