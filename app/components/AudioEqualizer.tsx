'use client';

import React, { useEffect, useState, useMemo } from 'react';
import styles from './AudioEqualizer.module.css';

interface EqualizerProps {
  barCount?: number;
  height?: number;
  segmentCount?: number;
  barWidth?: number;
  speed?: number;
  colors?: string[];
}

// Default colors if none provided
const DEFAULT_COLORS = [
  '#FF3366', // Pink
  '#33FF66', // Green
  '#3366FF', // Blue
  '#FFCC33', // Yellow
  '#FF33CC', // Magenta
  '#33FFCC', // Cyan
  '#FF6633', // Orange
  '#CC33FF', // Purple
  '#33CCFF', // Light Blue
  '#FFFF33', // Bright Yellow
];

export default function Equalizer({
  barCount = 50,
  height = 300,
  segmentCount = 10,
  barWidth = 40,
  speed = 400,
  colors = DEFAULT_COLORS,
}: EqualizerProps) {
  const [barsActive, setBarsActive] = useState<number[]>([]);
  const [colorMatrix, setColorMatrix] = useState<string[][]>([]);
  const [isClient, setIsClient] = useState(false);

  // Set initial state only on client side
  useEffect(() => {
    setIsClient(true);
    const initialBars = Array.from({ length: barCount }, () => 0);
    setBarsActive(initialBars);
    
    const initialColors = Array.from({ length: barCount }, () =>
      Array.from({ length: segmentCount }, () =>
        colors[Math.floor(Math.random() * colors.length)]
      )
    );
    setColorMatrix(initialColors);
  }, [barCount, segmentCount, colors]);

  // Update active segments and occasionally refresh colors
  useEffect(() => {
    if (!isClient) return;

    const interval = setInterval(() => {
      setBarsActive(Array.from({ length: barCount }, () => 
        Math.floor(Math.random() * (segmentCount + 1))
      ));

      // Occasionally update some colors for a dynamic effect
      if (Math.random() < 0.3) {
        setColorMatrix(prev => prev.map(bar =>
          bar.map(color =>
            Math.random() < 0.2 ? colors[Math.floor(Math.random() * colors.length)] : color
          )
        ));
      }
    }, speed);

    return () => clearInterval(interval);
  }, [barCount, segmentCount, speed, colors, isClient]);

  const renderBar = (barIndex: number) => {
    if (!isClient) {
      return <div key={barIndex} style={{ width: `${barWidth}px`, height: '100%' }} />;
    }

    const segments = [];
    const baseSegmentHeight = 6;
    const heightReductionFactor = 0.92;
    const gap = 2;
    let currentBottom = 0;

    for (let i = 0; i < segmentCount; i++) {
      const isActive = i < (barsActive[barIndex] || 0);
      const segmentHeight = Math.max(
        baseSegmentHeight * Math.pow(heightReductionFactor, i),
        2
      ).toFixed(2);
      
      segments.push(
        <div
          key={i}
          className={`${styles.segment} ${isActive ? styles.active : ''}`}
          style={{
            width: `${barWidth}px`,
            height: `${segmentHeight}px`,
            backgroundColor: isActive 
              ? (colorMatrix[barIndex]?.[i] || colors[0])
              : 'rgba(255, 255, 255, 0.05)',
            opacity: isActive ? 1 : 0.1,
            bottom: `${currentBottom.toFixed(2)}px`,
            left: '50%',
            transform: 'translateX(-50%)',
            position: 'absolute',
            transition: `all ${speed * 0.8}ms ease-out`,
          }}
        />
      );

      currentBottom += parseFloat(segmentHeight) + gap;
    }

    return (
      <div 
        key={barIndex}
        className={styles.bar}
        style={{ 
          height: '100%',
          width: `${barWidth}px`,
          position: 'relative'
        }}
      >
        {segments}
      </div>
    );
  };

  return (
    <div 
      className={styles.equalizerContainer}
      style={{ 
        height: `${height}px`,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 0,
        margin: 0
      }}
    >
      {Array.from({ length: barCount }, (_, index) => renderBar(index))}
    </div>
  );
} 