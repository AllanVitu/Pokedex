import { useStore } from '../../store/useStore';

export function EndSlide() {
  const { theme } = useStore();
  const isDark = theme === 'dark';

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-db-gold/5 blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full bg-db-red/5 blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="animate-ki-burst relative z-10">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-gold flex items-center justify-center shadow-lg shadow-db-gold/30 animate-ki-glow">
          <span className="text-3xl">⭐</span>
        </div>

        <h2 className={`text-3xl sm:text-5xl font-black mb-4 ${isDark ? 'text-white' : 'text-db-light-text'}`}>
          <span className="text-gradient-gold">Merci !</span>
        </h2>

        <p className={`text-sm sm:text-base max-w-md mx-auto mb-6 leading-relaxed ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
          J'espère que cette présentation vous a plu et vous a fait (re)découvrir l'univers incroyable de Dragon Ball.
        </p>

        <div className={`w-24 h-0.5 mx-auto my-6 gradient-gold rounded-full`} />

        <p className={`text-xs ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
          Dragon Ball Presentation &mdash; Créé avec React, TypeScript & Tailwind CSS
        </p>
      </div>
    </div>
  );
}
