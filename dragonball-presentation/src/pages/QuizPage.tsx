import { useStore } from '../store/useStore';
import { QuizEngine } from '../components/quiz/QuizEngine';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function QuizPage() {
  const { theme } = useStore();
  const isDark = theme === 'dark';
  const navigate = useNavigate();

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
          Quiz Dragon Ball
        </h1>
      </header>

      <div className="flex-1">
        <QuizEngine />
      </div>
    </div>
  );
}
