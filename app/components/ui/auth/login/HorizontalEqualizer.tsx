'use client';

import React, { useEffect, useState } from 'react';
import styles from './HorizontalEqualizer.module.css';

interface HorizontalEqualizerProps {
  barCount?: number;
  barHeight?: string;
  className?: string;
}

const HorizontalEqualizer: React.FC<HorizontalEqualizerProps> = ({
  barCount = 13,
  barHeight = '1px',
  className = '',
}) => {
  const [stylesArray, setStylesArray] = useState<React.CSSProperties[] | null>(
    null
  );

  useEffect(() => {
    const newStyles = Array.from({ length: barCount }, () => {
      const delay = Math.random() * 2;
      const duration = Math.random() * 1.4 + 1.8;

      return {
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        height: barHeight,
      };
    });
    setStylesArray(newStyles);
  }, [barCount, barHeight]);

  if (!stylesArray) return null;

  return (
    <div className={`${styles.equalizerHorizontal} ${className}`}>
      {stylesArray.map((style, index) => (
        <div key={index} className={styles.bar} style={style} />
      ))}
    </div>
  );
};

export default HorizontalEqualizer;
