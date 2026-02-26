import React from 'react';

const Milestone = ({ milestone }) => {
  const className = `milestone ${milestone.position.side === 'right' ? 'milestone-right' : ''}`;
  
  return (
    <div 
      className={className}
      style={{ top: milestone.position.top }}
    >
      <div className="milestone-title">{milestone.title}</div>
      <div className="milestone-text">{milestone.description}</div>
    </div>
  );
};

export default Milestone;