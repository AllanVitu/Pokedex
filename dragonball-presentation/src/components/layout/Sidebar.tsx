import { useStore } from '../../store/useStore';
import { slideList, chapters } from '../../data/slides';
import { X, Star, ChevronRight } from 'lucide-react';

export function Sidebar() {
  const {
    sidebarOpen,
    setSidebarOpen,
    currentSlide,
    setCurrentSlide,
    favorites,
    theme,
  } = useStore();

  if (!sidebarOpen) return null;

  const isDark = theme === 'dark';

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 bottom-0 w-80 max-w-[85vw] z-50 animate-slide-in-left overflow-y-auto ${
          isDark ? 'bg-db-surface border-r border-white/10' : 'bg-white border-r border-gray-200'
        }`}
        role="navigation"
        aria-label="Sommaire de la présentation"
      >
        <div className="p-4 flex items-center justify-between border-b border-white/10">
          <h2 className={`text-lg font-bold ${isDark ? 'text-db-gold' : 'text-db-blue-deep'}`}>
            Sommaire
          </h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Fermer le sommaire"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="p-2">
          {chapters.map((chapter) => {
            const chapterSlides = slideList
              .map((s, i) => ({ ...s, index: i }))
              .filter((s) => s.chapterId === chapter.id);

            const isActiveChapter = chapterSlides.some(
              (s) => s.index === currentSlide
            );

            return (
              <div key={chapter.id} className="mb-1">
                <div
                  className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 ${
                    isActiveChapter
                      ? isDark
                        ? 'bg-db-gold/20 text-db-gold'
                        : 'bg-db-blue-deep/10 text-db-blue-deep'
                      : isDark
                        ? 'text-db-text-muted'
                        : 'text-db-light-muted'
                  }`}
                >
                  <span>{chapter.icon}</span>
                  <span>{chapter.title}</span>
                </div>

                <div className="ml-6 space-y-0.5">
                  {chapterSlides.map((slide) => (
                    <button
                      key={slide.id}
                      onClick={() => {
                        setCurrentSlide(slide.index);
                        setSidebarOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 rounded-md text-sm flex items-center gap-2 transition-colors ${
                        slide.index === currentSlide
                          ? isDark
                            ? 'bg-white/10 text-white'
                            : 'bg-db-blue-deep/10 text-db-blue-deep font-medium'
                          : isDark
                            ? 'text-db-text-muted hover:bg-white/5 hover:text-white'
                            : 'text-db-light-muted hover:bg-gray-100 hover:text-db-light-text'
                      }`}
                    >
                      <ChevronRight size={12} className="opacity-50" />
                      <span className="flex-1">{slide.title}</span>
                      {favorites.includes(slide.id) && (
                        <Star size={12} className="text-db-gold fill-db-gold" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
