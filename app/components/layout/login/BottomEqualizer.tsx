'use client';

import styles from './BottomEqualizer.module.css';
import { useEffect, useState } from 'react';

export default function BottomEqualizer() {
  const colors = [
    styles['color-1'],
    styles['color-2'],
    styles['color-3'],
    styles['color-4'],
    styles['color-5'],
    styles['color-6'],
    styles['color-7'],
    styles['color-8'],
  ];

  const [bars, setBars] = useState<string[][]>([]);

  useEffect(() => {
    const generatedBars = [];
    for (let i = 0; i < 60; i++) {
      const blockCount = Math.floor(Math.random() * 7) + 3;
      const blocks = [];

      for (let j = 0; j < blockCount; j++) {
        const colorClass = colors[Math.floor(Math.random() * colors.length)];
        blocks.push(colorClass);
      }
      generatedBars.push(blocks);
    }
    setBars(generatedBars);
  }, []);

  return (
    <div className={styles.equalizer}>
      {bars.map((blocks, i) => (
        <div key={i} className={styles.bar}>
          {blocks.map((colorClass, j: number) => (
            <div key={j} className={`${styles.block} ${colorClass}`}></div>
          ))}
        </div>
      ))}
    </div>
  );
}
