import React from 'react';

export function PowerLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Horizontal power lines */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent w-full"
            style={{
              top: `${i * 10}%`,
              animation: 'power-flow 3s infinite linear',
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Vertical power lines */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-blue-400/50 to-transparent h-full"
            style={{
              left: `${i * 10}%`,
              animation: 'power-flow-vertical 4s infinite linear',
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}