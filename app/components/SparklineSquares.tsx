'use client';

import { useEffect, useState } from 'react';

interface Color {
  color: string;
  chance: number;
}

interface SparklineSquaresProps {
  rows?: number;
  columns?: number;
  squareSize?: number;
  gap?: number;
  colors?: Color[];
  speed?: number;
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

export default function SparklineSquares({
  rows = 5,
  columns = 10,
  squareSize = 10,
  gap = 4,
  colors = DEFAULT_COLORS,
  speed = 2000,
}: SparklineSquaresProps) {
  const [squareColors, setSquareColors] = useState<number[][]>([]);

  useEffect(() => {
    const newGrid = Array(rows)
      .fill(null)
      .map(() =>
        Array(columns)
          .fill(null)
          .map(() => getRandomColor(colors))
      );
    setSquareColors(newGrid);
  }, [rows, columns, colors]);

  const updateSquareColor = (rowIndex: number, colIndex: number) => {
    setSquareColors((prev) => {
      const newGrid = [...prev];
      newGrid[rowIndex] = [...newGrid[rowIndex]];
      newGrid[rowIndex][colIndex] = getRandomColor(colors);
      return newGrid;
    });
    
    setTimeout(() => {
      updateSquareColor(rowIndex, colIndex);
    }, Math.random() * (speed / 2) + speed / 2);
  };

  useEffect(() => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        setTimeout(() => {
          updateSquareColor(i, j);
        }, Math.random() * speed);
      }
    }
  }, [rows, columns, colors, speed]);

  return (
    <div
      className="relative"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, ${squareSize}px)`,
        gap: `${gap}px`,
      }}
    >
      {squareColors.map((row, rowIndex) =>
        row.map((colorIndex, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className="transition-colors duration-300 ease-in-out"
            style={{
              width: `${squareSize}px`,
              height: `${squareSize}px`,
              backgroundColor: colors[colorIndex].color,
            }}
          />
        ))
      )}
    </div>
  );
}
