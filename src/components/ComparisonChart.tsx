import React from 'react';
import { Zap } from 'lucide-react';

const comparisons = [
  { type: 'Carregador Comum', time: 120, color: 'bg-gray-400' },
  { type: 'Carregador Rápido', time: 60, color: 'bg-blue-400' },
  { type: 'Carregador Turbo 125W', time: 10, color: 'bg-yellow-400' },
];

export function ComparisonChart() {
  return (
    <div className="bg-gray-800 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-4">
        Tempo de Carregamento (0-50%)
      </h3>
      <div className="space-y-4">
        {comparisons.map((item, index) => (
          <div key={index} className="relative">
            <div className="flex items-center mb-1">
              <span className="text-white text-sm">{item.type}</span>
              <span className="ml-auto text-white text-sm">{item.time}min</span>
            </div>
            <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
              <div
                className={`h-full ${item.color} transition-all duration-1000`}
                style={{
                  width: `${(120 - item.time) / 1.2}%`,
                  animation: index === 2 ? 'pulse 2s infinite' : 'none',
                }}
              />
            </div>
            {index === 2 && (
              <Zap className="absolute -right-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-yellow-400 animate-bounce" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}