import React from 'react';
import '../styles/DepthIndicator.css';

const DepthIndicator = ({ depth, pressure, zoneName }) => {
  return (
    <div className="depth-indicator">
      <div className="indicator-row">
        <span className="label">DEPTH</span>
      </div>
      <div className="indicator-row">
        <span className="value">{depth.toLocaleString()} m</span>
      </div>
      <div className="indicator-row">
        <span className="label">PRESSURE</span>
      </div>
      <div className="indicator-row">
        <span className="value">{pressure}× ATM</span>
      </div>
      <div className="zone-name">{zoneName}</div>
    </div>
  );
};

export default DepthIndicator;

