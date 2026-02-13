import { X, FileJson, FileText } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { exportToJSON, exportToHTML } from '../../utils/export';

interface ExportModalProps {
  open: boolean;
  onClose: () => void;
}

export function ExportModal({ open, onClose }: ExportModalProps) {
  const { theme } = useStore();
  const isDark = theme === 'dark';

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" onClick={onClose} />
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md z-50 rounded-2xl shadow-2xl p-6 ${
          isDark ? 'bg-db-surface border border-white/10' : 'bg-white border border-gray-200'
        }`}
        role="dialog"
        aria-label="Exporter la présentation"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-lg font-bold ${isDark ? 'text-db-gold' : 'text-db-blue-deep'}`}>
            Exporter la présentation
          </h2>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-white/10">
            <X size={18} />
          </button>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => { exportToJSON(); onClose(); }}
            className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] ${
              isDark ? 'bg-white/5 hover:bg-white/10 border border-white/10' : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <FileJson size={24} className="text-db-gold" />
            <div className="text-left">
              <div className={`font-semibold ${isDark ? 'text-white' : 'text-db-light-text'}`}>Export JSON</div>
              <div className={`text-xs ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
                Données complètes (slides, personnages, quiz...)
              </div>
            </div>
          </button>

          <button
            onClick={() => { exportToHTML(); onClose(); }}
            className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] ${
              isDark ? 'bg-white/5 hover:bg-white/10 border border-white/10' : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <FileText size={24} className="text-db-blue" />
            <div className="text-left">
              <div className={`font-semibold ${isDark ? 'text-white' : 'text-db-light-text'}`}>Export HTML</div>
              <div className={`text-xs ${isDark ? 'text-db-text-muted' : 'text-db-light-muted'}`}>
                Page HTML complète, lisible dans un navigateur
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
