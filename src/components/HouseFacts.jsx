import React from 'react';
import './HouseFacts.css';

const HouseFacts = () => {
  return (
    <div className="house-facts">
      <h2>Fakta om huset 🏡</h2>
      <ul>
        <li>📍 Adress: Femte Villavägen 12, Sävedalen</li>
        <li>🛏️ 6 rum (3–4 sovrum)</li>
        <li>📐 Boarea: 106 m² + biarea 78 m²</li>
        <li>🌞 Solceller & laddbox för elbil</li>
        <li>🧖‍♂️ Bastu, förråd, garage & altan i söderläge</li>
        <li>🏞️ Nära naturreservatet Delsjön & Härlanda tjärn</li>
        <li>🛒 Gångavstånd till matvarubutik</li>
        <li>🚌 Svart Express-buss direkt till Göteborg</li>
      </ul>
    </div>
  );
};

export default HouseFacts;
