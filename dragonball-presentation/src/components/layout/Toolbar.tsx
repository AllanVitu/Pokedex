import { useStore } from '../../store/useStore';
import {
  Menu,
  ChevronLeft,
  ChevronRight,
  Maximize,
  Minimize,
  Star,
  Search,
  Sun,
  Moon,
  Play,
  Pause,
  Download,
  Monitor,
  Home,
} from 'lucide-react';
import { slideList } from '../../data/slides';
import { useNavigate } from 'react-router-dom';

interface ToolbarProps {
  onSearchOpen: () => void;
  onExportOpen: () => void;
}

export function Toolbar({ onSearchOpen, onExportOpen }: ToolbarProps) {
  const {
    currentSlide,
    nextSlide,
    prevSlide,
    setSidebarOpen,
    theme,
    toggleTheme,
    isFullscreen,
    setFullscreen,
    isAutoPlaying,
    setAutoPlaying,
    toggleFavorite,
    favorites,
    presenterMode,
    setPresenterMode,
  } = useStore();
  const navigate = useNavigate();

  const isDark = theme === 'dark';
  const slideId = slideList[currentSlide]?.id;
  const isFav = slideId ? favorites.includes(slideId) : false;

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setFullscreen(true);
    } else {
      document.exitFullscreen();
      setFullscreen(false);
    }
  };

  const btnClass = `p-2 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 ${
    isDark ? 'hover:bg-white/10 text-db-text' : 'hover:bg-gray-200 text-db-light-text'
  }`;

  return (
    <div
      className={`flex items-center justify-between px-2 sm:px-4 py-2 border-t ${
        isDark ? 'bg-db-surface/95 border-white/10 backdrop-blur-md' : 'bg-white/95 border-gray-200 backdrop-blur-md'
      }`}
    >
      {/* Left group */}
      <div className="flex items-center gap-1">
        <button onClick={() => navigate('/')} className={btnClass} aria-label="Accueil">
          <Home size={18} />
        </button>
        <button onClick={() => setSidebarOpen(true)} className={btnClass} aria-label="Ouvrir le sommaire">
          <Menu size={18} />
        </button>
        <button onClick={onSearchOpen} className={btnClass} aria-label="Rechercher">
          <Search size={18} />
        </button>
      </div>

      {/* Center: nav */}
      <div className="flex items-center gap-2">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`${btnClass} disabled:opacity-30 disabled:cursor-not-allowed`}
          aria-label="Slide précédente"
        >
          <ChevronLeft size={20} />
        </button>

        <span className={`text-sm font-mono min-w-[60px] text-center ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
          {currentSlide + 1}/{slideList.length}
        </span>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slideList.length - 1}
          className={`${btnClass} disabled:opacity-30 disabled:cursor-not-allowed`}
          aria-label="Slide suivante"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Right group */}
      <div className="flex items-center gap-1">
        <button
          onClick={() => slideId && toggleFavorite(slideId)}
          className={`${btnClass} ${isFav ? 'text-db-gold' : ''}`}
          aria-label={isFav ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        >
          <Star size={18} className={isFav ? 'fill-current' : ''} />
        </button>

        <button
          onClick={() => setAutoPlaying(!isAutoPlaying)}
          className={`${btnClass} ${isAutoPlaying ? 'text-db-green' : ''}`}
          aria-label={isAutoPlaying ? 'Pause auto-play' : 'Lancer auto-play'}
        >
          {isAutoPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>

        <div className="hidden sm:flex items-center gap-1">
          <button onClick={toggleTheme} className={btnClass} aria-label="Changer de thème">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setPresenterMode(!presenterMode)}
            className={`${btnClass} ${presenterMode ? 'text-db-blue' : ''}`}
            aria-label="Mode présentateur"
          >
            <Monitor size={18} />
          </button>

          <button onClick={onExportOpen} className={btnClass} aria-label="Exporter">
            <Download size={18} />
          </button>

          <button onClick={toggleFullscreen} className={btnClass} aria-label="Plein écran">
            {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
}
