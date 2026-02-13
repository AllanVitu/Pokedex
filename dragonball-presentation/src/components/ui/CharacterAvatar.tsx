interface CharacterAvatarProps {
  name: string;
  gradient: [string, string];
  emoji: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: 'w-12 h-12 text-lg',
  md: 'w-20 h-20 text-3xl',
  lg: 'w-28 h-28 text-5xl',
};

export function CharacterAvatar({ name, gradient, emoji, size = 'md' }: CharacterAvatarProps) {
  return (
    <div
      className={`${sizes[size]} rounded-full flex items-center justify-center shadow-lg`}
      style={{
        background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`,
      }}
      aria-label={name}
    >
      <span role="img" aria-hidden="true">{emoji}</span>
    </div>
  );
}
