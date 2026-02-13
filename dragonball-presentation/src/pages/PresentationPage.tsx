import { useRef, useState, useCallback } from 'react';
import { useStore } from '../store/useStore';
import { slideList } from '../data/slides';
import { SlideRenderer } from '../components/slides/SlideRenderer';
import { ProgressBar } from '../components/ui/ProgressBar';
import { Toolbar } from '../components/layout/Toolbar';
import { Sidebar } from '../components/layout/Sidebar';
import { SearchModal } from '../components/layout/SearchModal';
import { ExportModal } from '../components/layout/ExportModal';
import { useKeyboard } from '../hooks/useKeyboard';
import { useSwipe } from '../hooks/useSwipe';
import { useAutoPlay } from '../hooks/useAutoPlay';

export function PresentationPage() {
  const {
    currentSlide,
    nextSlide,
    prevSlide,
    theme,
    presenterMode,
  } = useStore();
  const isDark = theme === 'dark';
  const containerRef = useRef<HTMLDivElement>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);

  // Hooks
  useKeyboard();
  useAutoPlay();
  useSwipe(containerRef, {
    onSwipeLeft: nextSlide,
    onSwipeRight: prevSlide,
  });

  const handleSearchOpen = useCallback(() => setSearchOpen(true), []);
  const handleExportOpen = useCallback(() => setExportOpen(true), []);

  return (
    <div
      className={`h-screen flex flex-col ${
        isDark ? 'bg-db-dark text-db-text' : 'bg-db-light-bg text-db-light-text'
      }`}
    >
      <ProgressBar />

      <div className="flex flex-1 overflow-hidden">
        {/* Main slide area */}
        <div
          ref={containerRef}
          className="flex-1 relative overflow-hidden no-select"
        >
          {/* Current slide */}
          <div key={currentSlide} className="absolute inset-0 animate-ki-burst">
            <SlideRenderer slideIndex={currentSlide} />
          </div>

          {/* Click areas for navigation (desktop) */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1/6 cursor-pointer z-10 hidden sm:block"
            onClick={prevSlide}
            aria-hidden="true"
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-1/6 cursor-pointer z-10 hidden sm:block"
            onClick={nextSlide}
            aria-hidden="true"
          />
        </div>

        {/* Presenter mode: preview next slide */}
        {presenterMode && (
          <div
            className={`hidden lg:flex flex-col w-80 border-l ${
              isDark ? 'bg-db-surface border-white/10' : 'bg-white border-gray-200'
            }`}
          >
            <div className="p-3">
              <h3 className={`text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
                Slide suivante
              </h3>
            </div>
            <div className={`flex-1 overflow-hidden rounded-lg mx-3 mb-3 ${isDark ? 'bg-db-dark' : 'bg-db-light-bg'}`}>
              {currentSlide < slideList.length - 1 ? (
                <div className="transform scale-50 origin-top-left w-[200%] h-[200%]">
                  <SlideRenderer slideIndex={currentSlide + 1} />
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className={`text-sm ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
                    Dernière slide
                  </p>
                </div>
              )}
            </div>

            {/* Notes */}
            <div className={`p-3 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
              <h3 className={`text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
                Notes
              </h3>
              <p className={`text-xs ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
                {slideList[currentSlide]?.chapter} — Slide {currentSlide + 1}/{slideList.length}
              </p>
            </div>

            {/* Mini-map */}
            <div className={`p-3 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
              <h3 className={`text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
                Mini-map
              </h3>
              <div className="flex flex-wrap gap-1">
                {slideList.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => useStore.getState().setCurrentSlide(i)}
                    className={`w-4 h-3 rounded-sm transition-all ${
                      i === currentSlide
                        ? 'bg-db-gold scale-125'
                        : i < currentSlide
                          ? isDark ? 'bg-white/20' : 'bg-gray-300'
                          : isDark ? 'bg-white/5' : 'bg-gray-100'
                    }`}
                    aria-label={`Aller à la slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <Toolbar onSearchOpen={handleSearchOpen} onExportOpen={handleExportOpen} />
      <Sidebar />
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
      <ExportModal open={exportOpen} onClose={() => setExportOpen(false)} />
    </div>
  );
}
