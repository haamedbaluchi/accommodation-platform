'use client'
import { useCallback, useEffect, useState } from 'react';

export const useCounter = (initialTime: number) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const handleStart = useCallback(() => {
    setIsRunning(true);
  }, []);

  const handleReset = useCallback(() => {
    setIsRunning(false);
    setTimeLeft(initialTime);
  }, [initialTime]);

  const formatTime = useCallback((seconds: number) => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');

    const secs = (seconds % 60).toString().padStart(2, '0');

    return `${minutes}:${secs}`;
  }, []);

  return {
    timeLeft,
    formatTime,
    handleStart,
    handleReset,
    isRunning,
  };
};
