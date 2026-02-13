import { useState } from 'react';
import { useStore } from '../../store/useStore';
import { characters } from '../../data/characters';
import { CharacterAvatar } from '../ui/CharacterAvatar';
import { StatBar } from '../ui/StatBar';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function CharactersGallerySlide() {
  const { theme } = useStore();
  const isDark = theme === 'dark';
  const [selected, setSelected] = useState(0);
  const char = characters[selected];

  return (
    <div className="flex flex-col h-full px-4 sm:px-8 py-6 overflow-y-auto">
      <h2 className={`text-2xl sm:text-3xl font-black text-center mb-4 ${isDark ? 'text-white' : 'text-db-light-text'}`}>
        Galerie des <span className="text-gradient-gold">Héros</span>
      </h2>

      {/* Character selector */}
      <div className="flex items-center justify-center gap-2 mb-6 overflow-x-auto pb-2 no-select">
        {characters.map((c, i) => (
          <button
            key={c.id}
            onClick={(e) => { e.stopPropagation(); setSelected(i); }}
            className={`flex-shrink-0 transition-all duration-300 rounded-full ${
              i === selected ? 'scale-110' : 'opacity-50 hover:opacity-80'
            }`}
            style={i === selected ? { outline: `2px solid ${c.color}`, outlineOffset: '3px' } : undefined}
            aria-label={c.name}
          >
            <CharacterAvatar name={c.name} gradient={c.gradient} emoji={c.emoji} size="sm" />
          </button>
        ))}
      </div>

      {/* Character card */}
      <div
        className={`max-w-2xl mx-auto w-full rounded-2xl p-6 animate-ki-burst ${
          isDark ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200 shadow-lg'
        }`}
        key={char.id}
      >
        <div className="flex items-start gap-4 mb-4">
          <CharacterAvatar name={char.name} gradient={char.gradient} emoji={char.emoji} size="lg" />
          <div className="flex-1">
            <h3 className={`text-xl sm:text-2xl font-black ${isDark ? 'text-white' : 'text-db-light-text'}`}>
              {char.name}
            </h3>
            {char.alias && (
              <p className="text-sm" style={{ color: char.color }}>{char.alias}</p>
            )}
            <span
              className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full"
              style={{ backgroundColor: `${char.color}20`, color: char.color }}
            >
              {char.race}
            </span>
          </div>
        </div>

        <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
          {char.description}
        </p>

        {/* Stats */}
        <div className="space-y-2 mb-4">
          {char.stats.map((stat) => (
            <StatBar key={stat.label} label={stat.label} value={stat.value} color={char.color} />
          ))}
        </div>

        {/* Techniques */}
        <div className="flex flex-wrap gap-2">
          {char.techniques.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full border font-medium"
              style={{ borderColor: char.color, color: char.color }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={(e) => { e.stopPropagation(); setSelected(Math.max(0, selected - 1)); }}
          disabled={selected === 0}
          className="p-2 rounded-full bg-white/10 disabled:opacity-20 hover:bg-white/20 transition-colors"
          aria-label="Personnage précédent"
        >
          <ChevronLeft size={20} />
        </button>
        <span className={`text-sm self-center font-mono ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
          {selected + 1}/{characters.length}
        </span>
        <button
          onClick={(e) => { e.stopPropagation(); setSelected(Math.min(characters.length - 1, selected + 1)); }}
          disabled={selected === characters.length - 1}
          className="p-2 rounded-full bg-white/10 disabled:opacity-20 hover:bg-white/20 transition-colors"
          aria-label="Personnage suivant"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
