import { useState, useCallback } from 'react';
import { useStore } from '../../store/useStore';
import { quizQuestions } from '../../data/quiz';
import { CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react';

export function QuizEngine() {
  const { theme, bestScore, setBestScore } = useStore();
  const isDark = theme === 'dark';

  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [finished, setFinished] = useState(false);

  const question = quizQuestions[currentQ];
  const isCorrect = selectedAnswer === question?.correctIndex;

  const handleAnswer = useCallback((idx: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(idx);
    setShowResult(true);
    const newAnswers = [...answers, idx];
    setAnswers(newAnswers);

    if (idx === question.correctIndex) {
      setScore((s) => s + 1);
    }
  }, [selectedAnswer, answers, question]);

  const handleNext = useCallback(() => {
    if (currentQ < quizQuestions.length - 1) {
      setCurrentQ((c) => c + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setBestScore(score + (selectedAnswer === question.correctIndex ? 1 : 0));
      setFinished(true);
    }
  }, [currentQ, score, isCorrect, setBestScore, selectedAnswer, question?.correctIndex]);

  const handleRestart = useCallback(() => {
    setCurrentQ(0);
    setSelectedAnswer(null);
    setScore(0);
    setAnswers([]);
    setShowResult(false);
    setFinished(false);
  }, []);

  const finalScore: number = answers.reduce<number>(
    (acc, ans, i) => acc + (ans === quizQuestions[i]?.correctIndex ? 1 : 0),
    0
  );

  if (finished) {
    const pct = Math.round((finalScore / quizQuestions.length) * 100);
    const grade =
      pct >= 90
        ? { label: 'Ultra Instinct !', color: '#c0c0c0' }
        : pct >= 70
          ? { label: 'Super Saiyan Blue', color: '#00b4d8' }
          : pct >= 50
            ? { label: 'Super Saiyan', color: '#ffd700' }
            : { label: "Terrien courageux", color: '#06d6a0' };

    return (
      <div className="flex flex-col items-center justify-center h-full px-6 py-8 text-center">
        <div className="animate-ki-burst">
          <Trophy size={64} className="mx-auto mb-4" style={{ color: grade.color }} />
          <h2 className={`text-3xl font-black mb-2 ${isDark ? 'text-white' : 'text-db-light-text'}`}>
            Résultat
          </h2>
          <p className="text-5xl font-black mb-2" style={{ color: grade.color }}>
            {finalScore}/{quizQuestions.length}
          </p>
          <p className="text-lg font-semibold mb-6" style={{ color: grade.color }}>
            {grade.label}
          </p>

          {bestScore > 0 && (
            <p className={`text-sm mb-6 ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
              Meilleur score : {bestScore}/{quizQuestions.length}
            </p>
          )}

          {/* Review */}
          <div className={`max-w-lg mx-auto text-left rounded-xl p-4 mb-6 max-h-60 overflow-y-auto ${
            isDark ? 'bg-white/5' : 'bg-gray-50'
          }`}>
            {quizQuestions.map((q, i) => {
              const wasCorrect = answers[i] === q.correctIndex;
              return (
                <div key={q.id} className={`flex items-start gap-2 py-2 ${i > 0 ? 'border-t border-white/5' : ''}`}>
                  {wasCorrect ? (
                    <CheckCircle size={16} className="text-db-green mt-0.5 flex-shrink-0" />
                  ) : (
                    <XCircle size={16} className="text-db-red mt-0.5 flex-shrink-0" />
                  )}
                  <div>
                    <p className={`text-xs ${isDark ? 'text-db-text' : 'text-db-light-text'}`}>
                      {q.question}
                    </p>
                    {!wasCorrect && (
                      <p className="text-xs text-db-green mt-0.5">
                        Réponse : {q.options[q.correctIndex]}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-gold text-black font-bold hover:scale-105 active:scale-95 transition-transform"
          >
            <RotateCcw size={18} />
            Rejouer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full px-4 sm:px-8 py-6">
      {/* Progress */}
      <div className="flex items-center gap-3 mb-6">
        <span className={`text-sm font-mono ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
          {currentQ + 1}/{quizQuestions.length}
        </span>
        <div className={`flex-1 h-2 rounded-full overflow-hidden ${isDark ? 'bg-white/10' : 'bg-gray-200'}`}>
          <div
            className="h-full gradient-gold transition-all duration-300"
            style={{ width: `${((currentQ + 1) / quizQuestions.length) * 100}%` }}
          />
        </div>
        <span className={`text-sm font-bold ${isDark ? 'text-db-gold' : 'text-db-blue-deep'}`}>
          Score: {score}
        </span>
      </div>

      {/* Difficulty badge */}
      <div className="text-center mb-2">
        <span className={`text-xs px-3 py-1 rounded-full ${
          question.difficulty === 'easy'
            ? 'bg-db-green/20 text-db-green'
            : question.difficulty === 'medium'
              ? 'bg-db-gold/20 text-db-gold'
              : 'bg-db-red/20 text-db-red'
        }`}>
          {question.difficulty === 'easy' ? 'Facile' : question.difficulty === 'medium' ? 'Moyen' : 'Difficile'}
        </span>
      </div>

      {/* Question */}
      <h3 className={`text-lg sm:text-xl font-bold text-center mb-6 max-w-2xl mx-auto ${isDark ? 'text-white' : 'text-db-light-text'}`}>
        {question.question}
      </h3>

      {/* Options */}
      <div className="max-w-xl mx-auto w-full space-y-3 flex-1">
        {question.options.map((option, idx) => {
          let optionStyle = '';
          if (showResult) {
            if (idx === question.correctIndex) {
              optionStyle = 'border-db-green bg-db-green/10 text-db-green';
            } else if (idx === selectedAnswer && idx !== question.correctIndex) {
              optionStyle = 'border-db-red bg-db-red/10 text-db-red';
            } else {
              optionStyle = isDark ? 'border-white/10 opacity-50' : 'border-gray-200 opacity-50';
            }
          } else {
            optionStyle = isDark
              ? 'border-white/10 hover:border-db-gold/50 hover:bg-white/5 cursor-pointer'
              : 'border-gray-200 hover:border-db-blue-deep/50 hover:bg-gray-50 cursor-pointer';
          }

          return (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              disabled={showResult}
              className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all text-sm font-medium ${optionStyle} ${
                isDark ? 'text-db-text' : 'text-db-light-text'
              }`}
            >
              <span className="opacity-50 mr-3">{String.fromCharCode(65 + idx)}.</span>
              {option}
              {showResult && idx === question.correctIndex && (
                <CheckCircle size={18} className="inline ml-2 text-db-green" />
              )}
              {showResult && idx === selectedAnswer && idx !== question.correctIndex && (
                <XCircle size={18} className="inline ml-2 text-db-red" />
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation + Next */}
      {showResult && (
        <div className="max-w-xl mx-auto w-full mt-4 animate-slide-in-up">
          <div className={`rounded-xl p-4 mb-4 ${
            isCorrect
              ? isDark ? 'bg-db-green/10 border border-db-green/30' : 'bg-green-50 border border-green-200'
              : isDark ? 'bg-db-red/10 border border-db-red/30' : 'bg-red-50 border border-red-200'
          }`}>
            <p className={`text-sm ${isCorrect ? 'text-db-green' : 'text-db-red'}`}>
              {isCorrect ? 'Correct !' : 'Incorrect...'}
            </p>
            <p className={`text-xs mt-1 ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
              {question.explanation}
            </p>
          </div>
          <button
            onClick={handleNext}
            className="w-full py-3 rounded-xl gradient-gold text-black font-bold hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            {currentQ < quizQuestions.length - 1 ? 'Question suivante' : 'Voir le résultat'}
          </button>
        </div>
      )}
    </div>
  );
}
