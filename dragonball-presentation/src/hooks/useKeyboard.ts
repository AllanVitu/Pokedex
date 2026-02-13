import { useEffect } from 'react';
import { useStore } from '../store/useStore';

export function useKeyboard() {
  const { nextSlide, prevSlide, setFullscreen, isFullscreen, toggleTheme } =
    useStore();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Don't trigger on inputs
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return;

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          prevSlide();
          break;
        case 'f':
        case 'F':
          if (!e.ctrlKey && !e.metaKey) {
            e.preventDefault();
            if (!document.fullscreenElement) {
              document.documentElement.requestFullscreen();
              setFullscreen(true);
            } else {
              document.exitFullscreen();
              setFullscreen(false);
            }
          }
          break;
        case 'Escape':
          if (isFullscreen) {
            setFullscreen(false);
          }
          break;
        case 't':
        case 'T':
          if (!e.ctrlKey && !e.metaKey) {
            toggleTheme();
          }
          break;
        case 'Home':
          e.preventDefault();
          useStore.getState().setCurrentSlide(0);
          break;
        case 'End':
          e.preventDefault();
          useStore.getState().setCurrentSlide(useStore.getState().totalSlides - 1);
          break;
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [nextSlide, prevSlide, setFullscreen, isFullscreen, toggleTheme]);
}
