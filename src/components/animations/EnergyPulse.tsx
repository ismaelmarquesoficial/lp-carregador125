import React from 'react';

export function EnergyPulse() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-32 h-32 bg-yellow-400/20 rounded-full animate-pulse-slow" />
        <div className="absolute inset-0 w-32 h-32 bg-yellow-400/10 rounded-full animate-pulse-slow delay-75" />
        <div className="absolute inset-0 w-32 h-32 bg-yellow-400/5 rounded-full animate-pulse-slow delay-150" />
      </div>
    </div>
  );
}