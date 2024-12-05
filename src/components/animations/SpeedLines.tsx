import React from 'react';

export function SpeedLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute h-[1px] bg-blue-400 animate-speed-line"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 50 + 50}px`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.3,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
}