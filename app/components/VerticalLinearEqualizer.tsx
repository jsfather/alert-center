'use client';

import { useEffect, useState, useCallback, useRef } from 'react';

interface Color {
  color: string;
  chance: number;
}

interface VerticalLinearEqualizerProps {
  lineCount?: number;
  lineWidth?: number;
  gap?: number;
  colors?: Color[];
  speed?: number;
  transitionDuration?: number;
  className?: string;
  containerHeight?: number;
  minHeightPercent?: number;
  maxHeightPercent?: number;
}

const DEFAULT_COLORS: Color[] = [
  { color: '#5A827E', chance: 1 },
  { color: '#84AE92', chance: 1 },
  { color: '#B9D4AA', chance: 1 },
  { color: '#FAFFCA', chance: 1 },
];

const getRandomColor = (colors: Color[]) => {
  const totalChances = colors.reduce((sum, item) => sum + item.chance, 0);
  let random = Math.random() * totalChances;

  for (let i = 0; i < colors.length; i++) {
    random -= colors[i].chance;
    if (random <= 0) {
      return i;
    }
  }
  return colors.length - 1;
};

export default function VerticalLinearEqualizer({
  lineCount = 15,
  lineWidth = 2,
  gap = 2,
  colors = DEFAULT_COLORS,
  speed = 150,
  transitionDuration = 600,
  className = '',
  containerHeight = 200,
  minHeightPercent = 10,
  maxHeightPercent = 100,
}: VerticalLinearEqualizerProps) {
  const [lineHeights, setLineHeights] = useState<number[]>([]);
  const [lineColors, setLineColors] = useState<number[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const animationFrames = useRef<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const generateHeight = useCallback(() => {
    // Generate height as a percentage between minHeightPercent and maxHeightPercent
    return Math.random() * (maxHeightPercent - minHeightPercent) + minHeightPercent;
  }, [maxHeightPercent, minHeightPercent]);

  const updateLine = useCallback(
    (index: number) => {
      setLineHeights((prev) => {
        const newHeights = [...prev];
        newHeights[index] = generateHeight();
        return newHeights;
      });

      setLineColors((prev) => {
        const newColors = [...prev];
        newColors[index] = getRandomColor(colors);
        return newColors;
      });

      animationFrames.current[index] = window.setTimeout(
        () => {
          updateLine(index);
        },
        transitionDuration + Math.random() * speed
      );
    },
    [generateHeight, speed, transitionDuration, colors]
  );

  const initializeLines = useCallback(() => {
    const initialHeights = Array(lineCount)
      .fill(0)
      .map(() => generateHeight());
    const initialColors = Array(lineCount)
      .fill(0)
      .map(() => getRandomColor(colors));
    setLineHeights(initialHeights);
    setLineColors(initialColors);
  }, [lineCount, generateHeight, colors]);

  useEffect(() => {
    initializeLines();

    const initTimeout = setTimeout(() => {
      setIsInitialized(true);

      for (let i = 0; i < lineCount; i++) {
        animationFrames.current[i] = window.setTimeout(
          () => {
            updateLine(i);
          },
          i * 50 + Math.random() * speed
        );
      }
    }, 100);

    return () => {
      animationFrames.current.forEach((timeout) => {
        if (timeout) clearTimeout(timeout);
      });
      clearTimeout(initTimeout);
    };
  }, [lineCount, speed, updateLine, initializeLines]);

  if (lineHeights.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className={`flex w-full flex-row items-end justify-center ${className}`}
      style={{
        gap: `${gap}px`,
        height: `${containerHeight}px`,
      }}
    >
      {lineHeights.map((height, index) => (
        <div
          key={index}
          className={`flex-1 ${isInitialized ? 'transition-all ease-in-out' : ''}`}
          style={{
            minWidth: `${lineWidth}px`,
            height: `${height}%`,
            backgroundColor: colors[lineColors[index]].color,
            transitionDuration: `${transitionDuration}ms`,
            transitionProperty: 'height, background-color',
          }}
        />
      ))}
    </div>
  );
} 