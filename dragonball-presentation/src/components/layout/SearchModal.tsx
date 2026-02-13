import { useStore } from '../../store/useStore';
import { slideList } from '../../data/slides';
import { Search, X } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export function SearchModal({ open, onClose }: SearchModalProps) {
  const { searchQuery, setSearchQuery, searchResults, setCurrentSlide, theme } =
    useStore();
  const inputRef = useRef<HTMLInputElement>(null);
  const isDark = theme === 'dark';

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setSearchQuery('');
    }
  }, [open, setSearchQuery]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" onClick={onClose} />
      <div
        className={`fixed top-[10%] left-1/2 -translate-x-1/2 w-[90vw] max-w-lg z-50 rounded-2xl shadow-2xl overflow-hidden ${
          isDark ? 'bg-db-surface border border-white/10' : 'bg-white border border-gray-200'
        }`}
        role="dialog"
        aria-label="Rechercher dans la présentation"
      >
        <div className="flex items-center gap-3 p-4 border-b border-white/10">
          <Search size={20} className="opacity-50" />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher une slide, un sujet..."
            className={`flex-1 bg-transparent outline-none text-sm ${
              isDark ? 'text-white placeholder:text-db-text-muted' : 'text-db-light-text placeholder:text-db-light-muted'
            }`}
            aria-label="Terme de recherche"
          />
          <button onClick={onClose} className="p-1 rounded hover:bg-white/10">
            <X size={18} />
          </button>
        </div>

        <div className="max-h-[50vh] overflow-y-auto p-2">
          {searchQuery && searchResults.length === 0 && (
            <p className="text-center text-sm py-8 opacity-50">
              Aucun résultat pour &laquo; {searchQuery} &raquo;
            </p>
          )}

          {searchResults.map((idx) => {
            const slide = slideList[idx];
            return (
              <button
                key={slide.id}
                onClick={() => {
                  setCurrentSlide(idx);
                  onClose();
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                  isDark ? 'hover:bg-white/10' : 'hover:bg-gray-100'
                }`}
              >
                <span className="text-xs font-mono opacity-50 w-6">{idx + 1}</span>
                <div>
                  <div className={`text-sm font-medium ${isDark ? 'text-white' : 'text-db-light-text'}`}>
                    {slide.title}
                  </div>
                  <div className={`text-xs ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
                    {slide.chapter}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
