import { useState, useEffect } from 'react';
import './CountDown.css';

const TARGET_DATE = new Date('2025-08-01T00:00:00');

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState(null);
  const [showInDays, setShowInDays] = useState(() => {
    const stored = localStorage.getItem('showInDays');
    return stored === 'true';
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const diffMs = TARGET_DATE - now;
      const diffDays = diffMs / (1000 * 60 * 60 * 24);
      const diffWeeks = diffDays / 7;

      setTimeLeft({
        days: Math.max(0, Math.floor(diffDays)),
        weeks: Math.max(0, Math.floor(diffWeeks)),
      });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);

  const toggleUnit = () => {
    setShowInDays(prev => {
      const newValue = !prev;
      localStorage.setItem('showInDays', newValue);
      return newValue;
    });
  };

  return (
    <div className="countdown-box">
      {timeLeft && (
        <h2>{showInDays ? `${timeLeft.days} dagar` : `${timeLeft.weeks} veckor`} kvar</h2>
      )}
      <p className="countdown-sub">⏳ tills du får nycklarna</p>
      <button className="toggle-button" onClick={toggleUnit}>
        Visa i {showInDays ? 'veckor' : 'dagar'}
      </button>
    </div>
  );
};

export default CountDown;
