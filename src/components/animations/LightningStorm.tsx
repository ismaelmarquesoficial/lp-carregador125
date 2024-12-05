import React from 'react';

export function LightningStorm() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main lightning bolts */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 bg-gradient-to-b from-yellow-300 via-blue-300 to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
            height: `${Math.random() * 60 + 40}%`,
            opacity: 0,
            animation: 'lightning-strike 1.5s infinite',
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      {/* Thunder clouds effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-transparent to-transparent">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-32 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20"
            style={{
              top: `${i * 15}%`,
              animation: 'cloud-drift 8s infinite linear',
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Electric arcs */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: '50%',
            top: '50%',
            width: '2px',
            height: '100px',
            background: 'linear-gradient(to top, transparent, #60A5FA, #FBBF24)',
            transform: `rotate(${i * 45}deg)`,
            transformOrigin: 'bottom',
            animation: 'electric-arc 2s infinite',
            animationDelay: `${i * 0.25}s`,
          }}
        />
      ))}
    </div>
  );
}