import { useState, useEffect } from 'react';

export const useScrollDepth = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentDepth, setCurrentDepth] = useState(0);

  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = Math.min(scrollTop / docHeight, 1);
        
        setScrollProgress(progress);
        
        // Logarithmic depth calculation for dramatic pacing
        const maxDepth = 10900;
        let depth;
        
        if (progress < 0.1) {
          // Slow start at surface (0-200m over first 10% of scroll)
          depth = progress * 2000;
        } else {
          // Faster descent for remaining depth
          depth = 200 + (progress - 0.1) * (maxDepth - 200) / 0.9;
        }
        
        setCurrentDepth(Math.round(depth));
        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const getZoneName = () => {
    if (currentDepth < 200) return 'Sunlight Zone';
    if (currentDepth < 1000) return 'Twilight Zone';
    if (currentDepth < 4000) return 'Midnight Zone';
    if (currentDepth < 6000) return 'Abyssal Zone';
    return 'Hadal Zone';
  };

  const getPressure = () => {
    // Pressure increases by ~1 ATM per 10 meters
    return (1 + currentDepth / 10).toFixed(1);
  };

  return {
    scrollProgress,
    currentDepth,
    zoneName: getZoneName(),
    pressure: getPressure()
  };
};