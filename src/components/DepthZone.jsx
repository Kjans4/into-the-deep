import React from 'react';
import '../styles/DepthZone.css';

const DepthZone = ({ zone }) => {
  return (
    <div className={`zone ${zone.special ? 'zone-special' : ''}`}>
      <div className="zone-content">
        <h1 className="zone-title">{zone.title}</h1>
        <p className="zone-text">{zone.text}</p>
        {zone.subtitle && (
          <p className="zone-subtitle">{zone.subtitle}</p>
        )}
      </div>

      {/* Render animals */}
      {zone.animals && zone.animals.map((animal, idx) => (
        <div
          key={idx}
          className="animal"
          style={{
            top: animal.top,
            bottom: animal.bottom,
            left: animal.left,
            right: animal.right,
            fontSize: `${animal.size}px`,
            opacity: animal.opacity || 0.7,
            filter: animal.glow ? 'drop-shadow(0 0 20px rgba(100, 200, 255, 0.6))' : 'none'
          }}
        >
          {animal.emoji}
        </div>
      ))}

      {/* Special effects */}
      {zone.effects && zone.effects.includes('titanic') && (
        <div className="titanic-silhouette" />
      )}
    </div>
  );
};

export default DepthZone;