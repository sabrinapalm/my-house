import React from 'react';
import './HouseMap.css';

const HouseMap = () => {
  return (
    <div className="house-info-map-wrapper">
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
      <div className="house-map">
        <iframe
          title="Femte Villavägen 12 Map"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://maps.google.com/maps?q=Femte+Villav%C3%A4gen+12+S%C3%A4vedalen+Sweden&z=17&t=k&output=embed"
        ></iframe>
      </div>
    </div>
  );
};

export default HouseMap;
