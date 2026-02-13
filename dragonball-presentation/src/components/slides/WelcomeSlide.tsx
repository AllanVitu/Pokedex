import { useStore } from '../../store/useStore';

export function WelcomeSlide() {
  const { theme } = useStore();
  const isDark = theme === 'dark';

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6 relative overflow-hidden">
      {/* Background energy orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-db-gold/5 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-db-blue/5 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full bg-db-red/5 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="animate-ki-burst relative z-10">
        {/* Dragon Ball icon */}
        <div className="w-28 h-28 mx-auto mb-8 rounded-full gradient-gold flex items-center justify-center shadow-lg shadow-db-gold/30 animate-ki-glow">
          <span className="text-5xl" role="img" aria-label="Dragon Ball">🟠</span>
        </div>

        <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-black mb-4 tracking-tight ${
          isDark ? '' : 'text-db-light-text'
        }`}>
          <span className="text-gradient-gold">DRAGON</span>{' '}
          <span className={isDark ? 'text-white' : 'text-db-light-text'}>BALL</span>
        </h1>

        <p className={`text-lg sm:text-xl mb-2 font-light ${
          isDark ? 'text-db-text-muted' : 'text-db-light-muted'
        }`}>
          La Présentation Interactive
        </p>

        <div className={`w-24 h-0.5 mx-auto my-6 gradient-gold rounded-full`} />

        <p className={`text-sm max-w-md mx-auto mb-8 ${
          isDark ? 'text-db-text-muted' : 'text-db-light-muted'
        }`}>
          Explorez l'univers légendaire de Dragon Ball : sagas, personnages, transformations, techniques et bien plus encore.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
          {['Sagas', 'Personnages', 'Transformations', 'Techniques', 'Quiz'].map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 rounded-full border ${
                isDark ? 'border-db-gold/30 text-db-gold' : 'border-db-blue-deep/30 text-db-blue-deep'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <p className={`mt-8 text-xs ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
          Utilisez les flèches ou swipez pour naviguer
        </p>
      </div>
    </div>
  );
}
