'use client';

import { useEffect, useState, useCallback } from 'react';

interface CircularProgressProps {
  targetPercentage: number;
  size: number;
  strokeWidth: number;
  color: string;
  duration: number;
}

export default function CircularProgress({
  targetPercentage,
  size,
  strokeWidth,
  color,
  duration,
}: CircularProgressProps) {
  const [percentage, setPercentage] = useState(0);

  const animateProgress = useCallback((from: number, to: number, duration: number) => {
    const startTime = Date.now();
    
    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      setPercentage(from + (to - from) * progress);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else if (to === targetPercentage) {
        // After reaching target, animate to 100%
        animateProgress(targetPercentage, 100, duration / 2);
      } else if (to === 100) {
        // After reaching 100%, reset to 0 and start over
        setPercentage(0);
        setTimeout(() => {
          animateProgress(0, targetPercentage, duration);
        }, 500); // Wait 500ms before restarting
      }
    };
    
    requestAnimationFrame(animate);
  }, [targetPercentage]);

  useEffect(() => {
    // Start the animation sequence
    animateProgress(0, targetPercentage, duration);

    return () => {
      setPercentage(0);
    };
  }, [targetPercentage, duration, animateProgress]);

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  const fontSize = size * 0.2;

  return (
    <div style={{ width: size, height: size, position: 'relative' }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ transform: 'rotate(-90deg)' }}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e6e6e6"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{
            transition: 'stroke-dashoffset 0.1s ease',
          }}
        />
      </svg>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: `${fontSize}px`,
          fontWeight: 'bold',
          color: color,
        }}
      >
        {Math.round(percentage)}%
      </div>
    </div>
  );
} 