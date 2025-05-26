'use client';

import { useEffect, useState, useCallback, useRef } from 'react';

interface Color {
  color: string;
  chance: number;
}

interface EqualizerProps {
  barCount?: number;
  segmentWidth?: number;
  maxHeight?: number;
  gap?: number;
  minSegments?: number;
  maxSegments?: number;
  colors?: Color[];
  speed?: number;
  inactiveColor?: string;
  minHeight?: number;
  transitionDuration?: number;
  className?: string;
  autoFit?: boolean;
  containerHeight?: number;
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

interface BarState {
  activeSegments: number;
  colors: number[];
}

export default function Equalizer({
  barCount: initialBarCount = 40,
  segmentWidth = 6,
  gap = 2,
  minSegments = 1,
  maxSegments = 10,
  colors = DEFAULT_COLORS,
  speed = 150,
  transitionDuration = 600,
  className = '',
  autoFit = false,
  containerHeight = 100,
}: EqualizerProps) {
  const [bars, setBars] = useState<BarState[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [barCount, setBarCount] = useState(initialBarCount);
  const animationFrames = useRef<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const resizeObserver = useRef<ResizeObserver | null>(null);

  const generateSegmentCount = useCallback(() => {
    return (
      Math.floor(Math.random() * (maxSegments - minSegments + 1)) + minSegments
    );
  }, [maxSegments, minSegments]);

  const generateInitialState = useCallback(
    (count: number) => {
      return Array(count)
        .fill(null)
        .map(() => ({
          activeSegments: generateSegmentCount(),
          colors: Array(maxSegments)
            .fill(0)
            .map(() => getRandomColor(colors)),
        }));
    },
    [colors, generateSegmentCount, maxSegments]
  );

  const updateBar = useCallback(
    (index: number) => {
      setBars((currentBars) => {
        if (index >= currentBars.length) return currentBars;

        const newBars = [...currentBars];
        const currentActive = currentBars[index].activeSegments;
        const targetActive = generateSegmentCount();

        const maxChange = 2;
        const limitedChange = Math.min(
          Math.max(targetActive, currentActive - maxChange),
          currentActive + maxChange
        );

        newBars[index] = {
          activeSegments: limitedChange,
          colors: Array(maxSegments)
            .fill(0)
            .map(() => getRandomColor(colors)),
        };

        return newBars;
      });

      animationFrames.current[index] = window.setTimeout(
        () => {
          updateBar(index);
        },
        transitionDuration + Math.random() * speed
      );
    },
    [colors, generateSegmentCount, maxSegments, speed, transitionDuration]
  );

  const updateBarCount = useCallback(() => {
    if (!containerRef.current || !autoFit) return;

    const containerWidth = containerRef.current.offsetWidth;
    const totalGapSpace =
      gap * Math.floor(containerWidth / (segmentWidth + gap));
    const availableWidth = containerWidth - totalGapSpace;
    const newBarCount = Math.floor(availableWidth / segmentWidth);

    if (newBarCount !== barCount) {
      setBarCount(newBarCount);
      setBars(generateInitialState(newBarCount));

      // Clear existing animations
      animationFrames.current.forEach((timeout) => {
        if (timeout) clearTimeout(timeout);
      });

      // Restart animations for new bars
      for (let i = 0; i < newBarCount; i++) {
        animationFrames.current[i] = window.setTimeout(
          () => {
            updateBar(i);
          },
          i * 50 + Math.random() * speed
        );
      }
    }
  }, [
    autoFit,
    barCount,
    gap,
    generateInitialState,
    segmentWidth,
    speed,
    updateBar,
  ]);

  useEffect(() => {
    if (autoFit && containerRef.current) {
      resizeObserver.current = new ResizeObserver(updateBarCount);
      resizeObserver.current.observe(containerRef.current);
      updateBarCount();
    }

    return () => {
      if (resizeObserver.current) {
        resizeObserver.current.disconnect();
      }
    };
  }, [autoFit, updateBarCount]);

  useEffect(() => {
    setBars(generateInitialState(barCount));

    const initTimeout = setTimeout(() => {
      setIsInitialized(true);

      for (let i = 0; i < barCount; i++) {
        animationFrames.current[i] = window.setTimeout(
          () => {
            updateBar(i);
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
  }, [barCount, generateInitialState, speed, updateBar]);

  const getSegmentHeight = useCallback(
    (segmentIndex: number, totalSegments: number) => {
      const segmentSize = containerHeight / totalSegments;
      return segmentSize;
    },
    [containerHeight]
  );

  if (bars.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className={`flex items-end ${className}`}
      style={{
        gap: `${gap}px`,
        height: `${containerHeight}px`,
        width: '100%',
      }}
    >
      {bars.map((bar, barIndex) => (
        <div
          key={barIndex}
          className="flex flex-col-reverse"
          style={{ gap: `${gap}px` }}
        >
          {Array.from({ length: maxSegments }).map((_, segmentIndex) => {
            const currentHeight = getSegmentHeight(segmentIndex, maxSegments);
            const isActive = segmentIndex < bar.activeSegments;
            return (
              <div
                key={segmentIndex}
                className={`${isInitialized ? 'transition-all ease-in-out' : ''}`}
                style={{
                  width: `${segmentWidth}px`,
                  height: `${currentHeight}px`,
                  backgroundColor: colors[bar.colors[segmentIndex]].color,
                  transitionDuration: `${transitionDuration}ms`,
                  transitionProperty: 'opacity, transform',
                  opacity: isActive ? 1 : 0,
                  transform: `scale(${isActive ? 1 : 0.8})`,
                }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
