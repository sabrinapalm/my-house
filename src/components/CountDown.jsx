import { useEffect, useState } from 'react';
import './CountDown.css';

const TARGET_DATE = new Date('2025-08-01T00:00:00');

const CountDown = () => {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const calculateDays = () => {
      const now = new Date();
      const diff = Math.max(0, Math.floor((TARGET_DATE - now) / (1000 * 60 * 60 * 24)));
      setDaysLeft(diff);
    };

    calculateDays();
    const interval = setInterval(calculateDays, 1000 * 60 * 60); // Update hourly
    return () => clearInterval(interval);
  }, []);

  const totalDays = Math.max(
    1,
    Math.floor((TARGET_DATE - new Date('2024-08-01')) / (1000 * 60 * 60 * 24))
  ); // full year baseline
  const progress = 1 - daysLeft / totalDays;
  const radius = 80;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <div className="countdown-container">
      <h2 className="countdown-title">COUNTDOWN</h2>
      <svg height={radius * 2} width={radius * 2} className="progress-ring">
        <circle
          stroke="#2c2c2c"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="url(#gradient)"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference + ' ' + circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="progress-ring-circle"
        />
        <defs>
          <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00ffc6" />
            <stop offset="100%" stopColor="#00aaff" />
          </linearGradient>
        </defs>
      </svg>
      <div className="day-count">
        <span className="day-number">{daysLeft}</span>
        <span className="day-label">DAYS</span>
      </div>
    </div>
  );
};

export default CountDown;
