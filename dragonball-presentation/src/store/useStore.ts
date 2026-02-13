import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { slideList } from '../data/slides';

export type Theme = 'dark' | 'light';

interface PresentationState {
  // Theme
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;

  // Presentation navigation
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  totalSlides: number;

  // Fullscreen
  isFullscreen: boolean;
  setFullscreen: (v: boolean) => void;

  // Auto-play
  isAutoPlaying: boolean;
  autoPlayInterval: number;
  setAutoPlaying: (v: boolean) => void;
  setAutoPlayInterval: (ms: number) => void;

  // Favorites
  favorites: string[];
  toggleFavorite: (slideId: string) => void;
  isFavorite: (slideId: string) => boolean;

  // Search
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  searchResults: number[];

  // Quiz
  bestScore: number;
  setBestScore: (score: number) => void;

  // Presenter mode
  presenterMode: boolean;
  setPresenterMode: (v: boolean) => void;

  // Sidebar
  sidebarOpen: boolean;
  setSidebarOpen: (v: boolean) => void;
}

export const useStore = create<PresentationState>()(
  persist(
    (set, get) => ({
      // Theme
      theme: 'dark',
      setTheme: (theme) => set({ theme }),
      toggleTheme: () =>
        set((s) => ({ theme: s.theme === 'dark' ? 'light' : 'dark' })),

      // Presentation
      currentSlide: 0,
      totalSlides: slideList.length,
      setCurrentSlide: (index) => {
        const max = slideList.length - 1;
        set({ currentSlide: Math.max(0, Math.min(index, max)) });
      },
      nextSlide: () => {
        const { currentSlide } = get();
        const max = slideList.length - 1;
        if (currentSlide < max) set({ currentSlide: currentSlide + 1 });
      },
      prevSlide: () => {
        const { currentSlide } = get();
        if (currentSlide > 0) set({ currentSlide: currentSlide - 1 });
      },

      // Fullscreen
      isFullscreen: false,
      setFullscreen: (v) => set({ isFullscreen: v }),

      // Auto-play
      isAutoPlaying: false,
      autoPlayInterval: 5000,
      setAutoPlaying: (v) => set({ isAutoPlaying: v }),
      setAutoPlayInterval: (ms) => set({ autoPlayInterval: ms }),

      // Favorites
      favorites: [],
      toggleFavorite: (slideId) =>
        set((s) => ({
          favorites: s.favorites.includes(slideId)
            ? s.favorites.filter((f) => f !== slideId)
            : [...s.favorites, slideId],
        })),
      isFavorite: (slideId) => get().favorites.includes(slideId),

      // Search
      searchQuery: '',
      setSearchQuery: (q) => {
        const lower = q.toLowerCase();
        const results = lower
          ? slideList
              .map((s, i) => ({ s, i }))
              .filter(
                ({ s }) =>
                  s.title.toLowerCase().includes(lower) ||
                  s.searchText.toLowerCase().includes(lower) ||
                  s.chapter.toLowerCase().includes(lower)
              )
              .map(({ i }) => i)
          : [];
        set({ searchQuery: q, searchResults: results });
      },
      searchResults: [],

      // Quiz
      bestScore: 0,
      setBestScore: (score) =>
        set((s) => ({ bestScore: Math.max(s.bestScore, score) })),

      // Presenter mode
      presenterMode: false,
      setPresenterMode: (v) => set({ presenterMode: v }),

      // Sidebar
      sidebarOpen: false,
      setSidebarOpen: (v) => set({ sidebarOpen: v }),
    }),
    {
      name: 'dragonball-presentation-storage',
      partialize: (state) => ({
        theme: state.theme,
        favorites: state.favorites,
        bestScore: state.bestScore,
        autoPlayInterval: state.autoPlayInterval,
      }),
    }
  )
);
