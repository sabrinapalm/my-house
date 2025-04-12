import { useEffect, useState } from 'react';
import Gallery from './components/Gallery';
import './App.css';

const TARGET_DATE = new Date('2025-08-01T00:00:00');

const App = () => {
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
    <div className="app-wrapper">
      <div className="content">
        <h1>Femte Villavägen 12</h1>
        <p className="subtitle">Tillträde: 1 augusti 2025</p>
        <Gallery />
        <div className="countdown-box">
          {timeLeft && (
            <h2>{showInDays ? `${timeLeft.days} dagar` : `${timeLeft.weeks} veckor`} kvar</h2>
          )}
          <p className="countdown-sub">⏳ tills du får nycklarna</p>
          <button className="toggle-button" onClick={toggleUnit}>
            Visa i {showInDays ? 'veckor' : 'dagar'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
