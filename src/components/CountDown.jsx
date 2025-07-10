import { useEffect, useState } from 'react';
import './CountDown.css';

const TARGET_DATE = new Date('2025-07-31');
const START_DATE = new Date('2024-02-14');

const CountDown = () => {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const calculateDays = () => {
      const now = new Date();
      const diff = Math.max(0, Math.ceil((TARGET_DATE - now) / (1000 * 60 * 60 * 24)));

      setDaysLeft(diff);
    };

    calculateDays();
    const interval = setInterval(calculateDays, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);

  const totalDays = Math.max(1, Math.floor((TARGET_DATE - START_DATE) / (1000 * 60 * 60 * 24)));
  const progress = 1 - daysLeft / totalDays;
  const radius = 80;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference * (1 - progress);

  const messagesByDay = {
    27: "🧃 Time to label some boxes – you're getting closer!",
    26: '📦 Maybe start packing a drawer today?',
    25: '🛏️ Can you live out of one suitcase yet?',
    24: '📅 Double-check your moving checklist!',
    23: '🧽 Clean one room – future you says thanks!',
    22: '🪴 Have you found a spot for your plants yet?',
    21: '🎉 3 weeks left! Celebrate a little today!',
    20: '🧃 Hydrate and tape up a moving box!',
    19: '🛋️ Time to think about how to arrange your new living room!',
    18: '🪞 Maybe you don’t need 3 full-length mirrors?',
    17: '🎧 Create your Moving Day Playlist!',
    16: '📦 Toss one thing you don’t want to move!',
    15: '🪪 Update your address where it matters.',
    14: '🧹 Time to start packing for real!',
    13: '📦 Empty a cabinet today — nice and easy.',
    12: '📞 Notify your friends you’re moving soon!',
    11: '🧃 Reward yourself after one small task.',
    10: '📑 Confirm anything that was booked (truck, cleaner, etc.)',
    9: '🧼 Deep clean one room!',
    8: '🔌 Start listing electronics you’ll unplug last.',
    7: '📦 Final week! Almost there!',
    6: '🎒 Pack your essentials bag.',
    5: '📦 Stack your packed boxes proudly!',
    4: '🗑️ Donate or recycle the last few items!',
    3: '🍕 Plan your last dinner in the old home!',
    2: '🛏️ Last night in your bed here soon!',
    1: '🥳 Just one more sleep!',
    0: '🎉 Today is the day! Welcome home! 🏡',
  };

  let message = messagesByDay[daysLeft];

  if (!message) {
    if (daysLeft <= 30) {
      message = '🚚 One month to go!';
    } else if (daysLeft <= 60) {
      message = '⏳ Two months away. It’ll fly by!';
    } else if (daysLeft <= 100) {
      message = '🎈 You’re getting closer every day!';
    } else {
      message = '🛠️ The countdown has begun!';
    }
  }

  return (
    <div className="countdown-container">
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
            <stop offset="0%" stopColor="#ff00cc" />
            <stop offset="100%" stopColor="#8000ff" />
          </linearGradient>
        </defs>
      </svg>
      <div className="day-count">
        <span className="day-number">{daysLeft}</span>
        <span className="day-label">DAYS</span>
      </div>
      <div className="countdown-message">{message}</div>
    </div>
  );
};

export default CountDown;
