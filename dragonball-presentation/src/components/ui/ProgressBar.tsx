import { useStore } from '../../store/useStore';
import { slideList } from '../../data/slides';

export function ProgressBar() {
  const { currentSlide, theme } = useStore();
  const progress = ((currentSlide + 1) / slideList.length) * 100;
  const currentChapter = slideList[currentSlide]?.chapter ?? '';

  return (
    <div className="w-full" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} aria-label="Progression de la présentation">
      <div
        className={`h-1 transition-all duration-500 ease-out ${
          theme === 'dark' ? 'bg-db-surface' : 'bg-gray-200'
        }`}
      >
        <div
          className="h-full gradient-gold transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex justify-between items-center px-4 py-1">
        <span className={`text-xs ${theme === 'dark' ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
          {currentChapter}
        </span>
        <span className={`text-xs font-mono ${theme === 'dark' ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
          {currentSlide + 1} / {slideList.length}
        </span>
      </div>
    </div>
  );
}
