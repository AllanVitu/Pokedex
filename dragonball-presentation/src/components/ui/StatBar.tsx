interface StatBarProps {
  label: string;
  value: number;
  color: string;
  maxValue?: number;
}

export function StatBar({ label, value, color, maxValue = 100 }: StatBarProps) {
  const pct = Math.min((value / maxValue) * 100, 100);

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs w-20 text-right opacity-80">{label}</span>
      <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
      <span className="text-xs font-mono w-8">{value}</span>
    </div>
  );
}
