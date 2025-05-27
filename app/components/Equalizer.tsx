'use client';

import { useEffect, useState } from 'react';
import styles from './Equalizer.module.css';

interface EqualizerProps {
  barCount?: number;
  width?: string;
  height?: string;
}

export default function Equalizer({
  barCount = 5,
  width = '100%',
  height = '100%',
}: EqualizerProps) {
  const [bars, setBars] = useState<number[]>([]);

  useEffect(() => {
    setBars(Array.from({ length: barCount }, (_, i) => i));
  }, [barCount]);

  return (
    <div 
      className={styles.equalizer}
      style={{ width, height }}
    >
      {bars.map((_, index) => (
        <div 
          key={index} 
          className={styles.bar}
          style={{
            animationDelay: `${index * 0.2}s`
          }}
        />
      ))}
    </div>
  );
}
