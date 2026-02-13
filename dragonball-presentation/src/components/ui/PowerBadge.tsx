interface PowerBadgeProps {
  label: string;
  value: string;
  color: string;
}

export function PowerBadge({ label, value, color }: PowerBadgeProps) {
  return (
    <div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border"
      style={{ borderColor: color, color }}
    >
      <span className="opacity-70">{label}</span>
      <span>{value}</span>
    </div>
  );
}
