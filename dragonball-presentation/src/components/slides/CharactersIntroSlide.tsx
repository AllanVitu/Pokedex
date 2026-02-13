import { useStore } from '../../store/useStore';
import { characters } from '../../data/characters';
import { CharacterAvatar } from '../ui/CharacterAvatar';

export function CharactersIntroSlide() {
  const { theme } = useStore();
  const isDark = theme === 'dark';

  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-8">
      <div className="animate-ki-burst text-center mb-8">
        <span className="text-5xl mb-4 block">👥</span>
        <h2 className={`text-3xl sm:text-5xl font-black mb-3 ${isDark ? 'text-white' : 'text-db-light-text'}`}>
          Les <span className="text-gradient-gold">Personnages</span>
        </h2>
        <p className={`text-sm sm:text-base max-w-xl mx-auto ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
          Des héros légendaires aux antagonistes terrifiants, découvrez les guerriers qui ont marqué l'histoire de Dragon Ball.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 max-w-2xl animate-slide-in-up">
        {characters.slice(0, 8).map((char, i) => (
          <div
            key={char.id}
            className="flex flex-col items-center gap-2 animate-float"
            style={{ animationDelay: `${i * 200}ms` }}
          >
            <CharacterAvatar
              name={char.name}
              gradient={char.gradient}
              emoji={char.emoji}
              size="md"
            />
            <span className={`text-xs font-medium ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
              {char.name.split(' ').pop()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
