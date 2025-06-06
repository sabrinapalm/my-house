import React from 'react';
import './HouseMap.css';

const HouseMap = () => {
  return (
    <div className="house-info-map-wrapper">
      <div className="house-map">
        <iframe
          title="Femte Villavägen 12 Map"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://maps.google.com/maps?q=Femte+Villav%C3%A4gen+12+S%C3%A4vedalen+Sweden&z=19&t=k&output=embed"
        ></iframe>
      </div>
    </div>
  );
};

export default HouseMap;
