import { useStore } from '../store/useStore';
import { slideList } from '../data/slides';
import { ArrowLeft, Star, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function FavoritesPage() {
  const { theme, favorites, toggleFavorite, setCurrentSlide } = useStore();
  const isDark = theme === 'dark';
  const navigate = useNavigate();

  const favoriteSlides = slideList
    .map((s, i) => ({ ...s, index: i }))
    .filter((s) => favorites.includes(s.id));

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'bg-db-dark text-db-text' : 'bg-db-light-bg text-db-light-text'}`}>
      <header className={`flex items-center gap-3 px-4 py-3 border-b ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
        <button
          onClick={() => navigate('/')}
          className={`p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}
          aria-label="Retour"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className={`text-lg font-bold ${isDark ? 'text-db-gold' : 'text-db-blue-deep'}`}>
          Mes Favoris
        </h1>
      </header>

      <div className="flex-1 p-4 max-w-2xl mx-auto w-full">
        {favoriteSlides.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Star size={48} className={`mb-4 ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`} />
            <p className={`text-lg font-semibold mb-2 ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
              Aucun favori
            </p>
            <p className={`text-sm ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
              Marquez des slides pendant la présentation en cliquant sur l'étoile.
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {favoriteSlides.map((slide) => (
              <div
                key={slide.id}
                className={`flex items-center gap-3 p-4 rounded-xl transition-colors ${
                  isDark ? 'bg-db-surface hover:bg-db-surface-light' : 'bg-white hover:bg-gray-50 shadow-sm'
                }`}
              >
                <button
                  onClick={() => {
                    setCurrentSlide(slide.index);
                    navigate('/presentation');
                  }}
                  className="flex-1 text-left flex items-center gap-3"
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono ${
                    isDark ? 'bg-white/10' : 'bg-gray-100'
                  }`}>
                    {slide.index + 1}
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-db-light-text'}`}>
                      {slide.title}
                    </p>
                    <p className={`text-xs ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
                      {slide.chapter}
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => {
                    setCurrentSlide(slide.index);
                    navigate('/presentation');
                  }}
                  className="p-2 rounded-lg bg-db-gold/20 text-db-gold hover:bg-db-gold/30 transition-colors"
                  aria-label="Aller à la slide"
                >
                  <Play size={14} />
                </button>

                <button
                  onClick={() => toggleFavorite(slide.id)}
                  className="p-2 rounded-lg text-db-gold hover:bg-db-gold/10 transition-colors"
                  aria-label="Retirer des favoris"
                >
                  <Star size={14} className="fill-current" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
