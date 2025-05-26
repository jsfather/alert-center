'use client';

import { useEffect, useState, useCallback, useRef } from 'react';

interface HorizontalLinearEqualizerProps {
  lineCount?: number;
  lineHeight?: number;
  gap?: number;
  color?: string;
  speed?: number;
  transitionDuration?: number;
  className?: string;
  autoFit?: boolean;
  containerHeight?: number;
  minWidth?: number;
  maxWidth?: number;
}

export default function HorizontalLinearEqualizer({
  lineCount = 15,
  lineHeight = 2,
  gap = 2,
  color = '#FFFFFF',
  speed = 150,
  transitionDuration = 600,
  className = '',
  containerHeight = 100,
  minWidth = 20,
  maxWidth = 100,
}: HorizontalLinearEqualizerProps) {
  const [lineWidths, setLineWidths] = useState<number[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const animationFrames = useRef<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const generateWidth = useCallback(() => {
    return Math.random() * (maxWidth - minWidth) + minWidth;
  }, [maxWidth, minWidth]);

  const updateLine = useCallback(
    (index: number) => {
      setLineWidths((prev) => {
        const newWidths = [...prev];
        newWidths[index] = generateWidth();
        return newWidths;
      });

      animationFrames.current[index] = window.setTimeout(
        () => {
          updateLine(index);
        },
        transitionDuration + Math.random() * speed
      );
    },
    [generateWidth, speed, transitionDuration]
  );

  const initializeLines = useCallback(() => {
    const initialWidths = Array(lineCount)
      .fill(0)
      .map(() => generateWidth());
    setLineWidths(initialWidths);
  }, [lineCount, generateWidth]);

  useEffect(() => {
    initializeLines();

    const initTimeout = setTimeout(() => {
      setIsInitialized(true);

      // Start animation for each line with staggered delays
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

  if (lineWidths.length === 0) return null;

  const totalContentHeight = (lineHeight + gap) * lineCount - gap;
  const verticalPadding = Math.max(
    0,
    (containerHeight - totalContentHeight) / 2
  );

  return (
    <div
      ref={containerRef}
      className={`flex flex-col justify-center ${className}`}
      style={{
        gap: `${gap}px`,
        height: `${containerHeight}px`,
        padding: `${verticalPadding}px 0`,
      }}
    >
      {lineWidths.map((width, index) => (
        <div
          key={index}
          className={`${isInitialized ? 'transition-all ease-in-out' : ''}`}
          style={{
            height: `${lineHeight}px`,
            width: `${width}%`,
            backgroundColor: color,
            transitionDuration: `${transitionDuration}ms`,
            transitionProperty: 'width',
          }}
        />
      ))}
    </div>
  );
}
