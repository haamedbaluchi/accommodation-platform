interface LoaderProps {
  color?: string;
  size?: number;
}

export function Loader({ color = 'orange', size = 6 }: LoaderProps) {
  const dots = [0, 1, 2];
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
      }}
    >
      {dots.map((dot, i) => (
        <span
          key={i}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: color === 'orange' ? '#666666' : color,
            animation: 'bounceDot 0.6s infinite',
            animationDelay: `${i * 0.2}s`,
            borderRadius: '100%',
            display: ' inline-block',
          }}
        ></span>
      ))}

      <style>
        {`
          @keyframes bounceDot {
            0%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-6px); }
          }
        `}
      </style>
    </div>
  );
}
