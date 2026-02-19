import React from 'react';
import '../styles/Sunray.css';

const Sunrays = ({ visible }) => {
  const rays = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    left: 15 + i * 15,
    delay: i * 1.2,
    duration: 8 + i * 2
  }));

  return (
    <div className={`sunrays ${visible ? 'visible' : ''}`}>
      {rays.map(ray => (
        <div
          key={ray.id}
          className="ray"
          style={{
            left: `${ray.left}%`,
            animationDelay: `${ray.delay}s`,
            animationDuration: `${ray.duration}s`
          }}
        />
      ))}
    </div>
  );
};

export default Sunrays;