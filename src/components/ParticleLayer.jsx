import React from 'react';
import '../styles/ParticleLayer.css';

const ParticleLayer = ({ count = 30, depth }) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    duration: 12 + Math.random() * 8,
    delay: Math.random() * 5,
    opacity: depth > 1000 ? 0.2 : 0.4
  }));

  return (
    <div className="particles">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            opacity: particle.opacity
          }}
        />
      ))}
    </div>
  );
};

export default ParticleLayer;