import { useEffect } from 'react';
import { useStore } from '../store/useStore';

export function useAutoPlay() {
  const { isAutoPlaying, autoPlayInterval, nextSlide, currentSlide, totalSlides } =
    useStore();

  useEffect(() => {
    if (!isAutoPlaying) return;
    if (currentSlide >= totalSlides - 1) {
      useStore.getState().setAutoPlaying(false);
      return;
    }

    const timer = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isAutoPlaying, autoPlayInterval, nextSlide, currentSlide, totalSlides]);
}
