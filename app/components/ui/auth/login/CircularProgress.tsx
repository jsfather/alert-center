'use client';

import { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface CircularProgressClientProps {
  targetPercentage: number;
  changeDelay: number;
  margin: string;
  width: string;
  height: string;
}

function CircularProgressClient({
  targetPercentage,
  changeDelay,
  margin,
  width,
  height,
}: CircularProgressClientProps) {
  const [percentage, setPercentage] = useState(targetPercentage);

  useEffect(() => {
    const changePercentage = async () => {
      while (true) {
        await delay(changeDelay);
        setPercentage(100);
        await delay(changeDelay);
        setPercentage(0);
        await delay(changeDelay);
        setPercentage(targetPercentage);
        await delay(changeDelay);
      }
    };

    const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

    changePercentage();
  }, [targetPercentage, changeDelay]);

  return (
    <CircularProgressbar
      value={percentage}
      text={`${Math.round(percentage)}`}
      styles={{
        root: {
          margin: margin,
          width: width,
          height: height,
        },
        path: {
          stroke: '#808080',
          strokeWidth: '4px',
          transition: 'stroke-dashoffset 0.5s ease 0s',
        },
        trail: {
          stroke: '#191919',
          strokeWidth: '4px',
        },
        text: {
          fill: '#808080',
          fontSize: '25px',
        },
      }}
    />
  );
}

interface CircularProgressProps {
  targetPercentage: number;
  changeDelay?: number;
  margin?: string;
  width?: string;
  height?: string;
}

export default function CircularProgress({
  targetPercentage,
  changeDelay = 2000,
  margin = '0',
  width = '100%',
  height = '100%',
}: CircularProgressProps) {
  return (
    <CircularProgressClient
      targetPercentage={targetPercentage}
      changeDelay={changeDelay}
      margin={margin}
      width={width}
      height={height}
    />
  );
}
