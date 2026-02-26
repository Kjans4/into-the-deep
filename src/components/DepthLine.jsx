import React from 'react';

const DepthLine = ({ depth, label, position }) => {
  return (
    <div 
      className="depth-line" 
      data-depth={label}
      style={{ top: position }}
    />
  );
};

export default DepthLine;