import React from 'react';

export function EnergyCore() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Central energy core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-96 h-96">
          {/* Pulsing core */}
          <div className="absolute inset-0 bg-yellow-400/20 rounded-full animate-pulse-slow" />
          
          {/* Energy rings */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 border-2 border-yellow-300/30 rounded-full"
              style={{
                animation: `spin-${i} 8s linear infinite`,
                animationDelay: `${i * 0.5}s`,
                transform: `scale(${1 + i * 0.2})`,
              }}
            />
          ))}
          
          {/* Lightning bolts */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-32 bg-gradient-to-t from-yellow-400 to-transparent"
              style={{
                left: '50%',
                top: '50%',
                transform: `rotate(${i * 45}deg)`,
                transformOrigin: 'bottom',
                animation: 'lightning-bolt 2s infinite',
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}