import React, { useState } from 'react';

const Creature = ({ creature }) => {
  const [showFact, setShowFact] = useState(false);
  
  const style = {
    ...creature.position,
    fontSize: creature.size === 'small' ? '35px' : 
              creature.size === 'medium' ? '60px' :
              creature.size === 'large' ? '100px' : '140px'
  };

  const className = `creature ${creature.drift ? 'animal-drift' : ''} ${creature.glow ? 'glow' : ''}`;

  return (
    <div 
      className={className}
      style={style}
      onMouseEnter={() => setShowFact(true)}
      onMouseLeave={() => setShowFact(false)}
      title={creature.name}
    >
      <span className="creature-emoji">{creature.emoji}</span>
      {showFact && creature.fact && (
        <div className="fact-card" style={{
          top: '110%',
          left: creature.position.left ? '0' : 'auto',
          right: creature.position.right ? '0' : 'auto'
        }}>
          <div className="fact-creature-name">{creature.name}</div>
          <div className="fact-text">{creature.fact}</div>
        </div>
      )}
    </div>
  );
};

export default Creature;