import React from 'react';
import { useScrollDepth } from './hooks/useScrollDepth';
import { depthZones, colorStops } from './Data/depthZones';
import DepthIndicator from './components/DepthIndicator';
import DepthZone from './components/DepthZone';
import ParticleLayer from './components/ParticleLayer';
import Sunrays from './components/Sunray';
import BioluminescentGlow from './components/BioluminescentGlow';
import './App.css';

const App = () => {
  const { currentDepth, zoneName, pressure } = useScrollDepth();

  // Calculate background gradient based on current depth
  const getBackgroundGradient = () => {
    // Find the two color stops we're between
    let lowerStop = colorStops[0];
    let upperStop = colorStops[1];

    for (let i = 0; i < colorStops.length - 1; i++) {
      if (currentDepth >= colorStops[i].depth && currentDepth < colorStops[i + 1].depth) {
        lowerStop = colorStops[i];
        upperStop = colorStops[i + 1];
        break;
      } else if (currentDepth >= colorStops[colorStops.length - 1].depth) {
        return `linear-gradient(180deg, ${colorStops[colorStops.length - 1].colors[0]}, ${colorStops[colorStops.length - 1].colors[1]})`;
      }
    }

    // Interpolation factor
    const range = upperStop.depth - lowerStop.depth;
    const t = (currentDepth - lowerStop.depth) / range;

    // Simple interpolation between color stops
    const interpolateColor = (color1, color2, factor) => {
      // Parse hex colors
      const hex1 = color1.replace('#', '');
      const hex2 = color2.replace('#', '');
      
      const r1 = parseInt(hex1.substr(0, 2), 16);
      const g1 = parseInt(hex1.substr(2, 2), 16);
      const b1 = parseInt(hex1.substr(4, 2), 16);
      
      const r2 = parseInt(hex2.substr(0, 2), 16);
      const g2 = parseInt(hex2.substr(2, 2), 16);
      const b2 = parseInt(hex2.substr(4, 2), 16);
      
      const r = Math.round(r1 + (r2 - r1) * factor);
      const g = Math.round(g1 + (g2 - g1) * factor);
      const b = Math.round(b1 + (b2 - b1) * factor);
      
      return `rgb(${r}, ${g}, ${b})`;
    };

    const topColor = interpolateColor(lowerStop.colors[0], upperStop.colors[0], t);
    const bottomColor = interpolateColor(lowerStop.colors[1], upperStop.colors[1], t);

    return `linear-gradient(180deg, ${topColor}, ${bottomColor})`;
  };

  return (
    <div className="ocean-container" style={{ background: getBackgroundGradient() }}>
      {/* Fixed UI Elements */}
      <DepthIndicator 
        depth={currentDepth} 
        pressure={pressure} 
        zoneName={zoneName} 
      />

      {/* Environmental Effects */}
      <Sunrays visible={currentDepth < 100} />
      <ParticleLayer count={30} depth={currentDepth} />
      {currentDepth > 800 && <BioluminescentGlow />}

      {/* Depth Zones */}
      {depthZones.map(zone => (
        <DepthZone key={zone.id} zone={zone} />
      ))}

      {/* Ending */}
      <div className="ending">
        <div className="ending-text">...</div>
      </div>
    </div>
  );
};

export default App;