import React from 'react';
import { Battery } from 'lucide-react';

export function PowerMeter() {
  return (
    <div className="relative w-full max-w-md mx-auto mb-8">
      <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-green-400 via-yellow-300 to-red-500 animate-power-surge"
          style={{ width: '75%' }}
        />
      </div>
      <div className="flex justify-between mt-2 text-sm text-gray-300">
        <div className="flex items-center">
          <Battery className="h-4 w-4 mr-1" />
          <span>0W</span>
        </div>
        <span>65W</span>
        <span className="text-yellow-300 font-bold">125W</span>
      </div>
    </div>
  );
}