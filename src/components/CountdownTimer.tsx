import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export function CountdownTimer() {
  const [time, setTime] = useState({ hours: 4, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        }
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-4 text-2xl font-bold">
      <Clock className="h-6 w-6 text-yellow-300 animate-spin-slow" />
      <div className="flex space-x-2">
        <div className="bg-blue-900/50 px-3 py-2 rounded-lg">
          {String(time.hours).padStart(2, '0')}
        </div>
        <span className="text-yellow-300 animate-pulse">:</span>
        <div className="bg-blue-900/50 px-3 py-2 rounded-lg">
          {String(time.minutes).padStart(2, '0')}
        </div>
        <span className="text-yellow-300 animate-pulse">:</span>
        <div className="bg-blue-900/50 px-3 py-2 rounded-lg">
          {String(time.seconds).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
}