import React from 'react';

export function ElectricEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute w-[200%] h-full animate-lightning opacity-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-yellow-300"
            style={{
              left: `${Math.random() * 100}%`,
              width: '2px',
              height: `${Math.random() * 30 + 20}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 45}deg)`,
              filter: 'blur(2px)',
            }}
          />
        ))}
      </div>
    </div>
  );
}