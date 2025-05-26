'use client';

import Image from 'next/image';
import HorizontalLinearEqualizer from '@/app/components/HorizontalLinearEqualizer';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState, useEffect } from 'react';
import VerticalLinearEqualizer from '@/app/components/VerticalLinearEqualizer';
import SparklineDots from '@/app/components/SparklineDots';

export default function Page() {
  const [progress, setProgress] = useState({
    progress1: 0,
    progress2: 10,
    progress3: 0,
    progress4: 66,
  });

  useEffect(() => {
    const values = {
      progress1: [0, 75, 100, 0],
      progress2: [10, 55, 90, 10],
      progress3: [0, 80, 25, 0],
      progress4: [66, 50, 7, 66],
    };
    let currentIndex = 0;

    const interval = setInterval(() => {
      setProgress((prev) => ({
        ...prev,
        progress1: values.progress1[currentIndex],
        progress2: values.progress2[currentIndex],
        progress3: values.progress3[currentIndex],
        progress4: values.progress4[currentIndex],
      }));
      currentIndex = (currentIndex + 1) % values.progress1.length;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-dotted grid h-full min-h-screen grid-cols-3 p-4">
      <div>
        <div className="flex h-fit flex-row items-center gap-4">
          <Image
            src="/login/glob.png"
            width={137}
            height={137}
            alt="Picture of the author"
          />
          <HorizontalLinearEqualizer
            className="h-[200px] w-full"
            lineCount={13}
            lineHeight={1}
            gap={5}
            color="#e6e6e6"
            containerHeight={100}
            transitionDuration={4000}
            speed={4000}
          />
        </div>
        <div className="flex h-fit flex-row items-center gap-4">
          <div>
            <CircularProgressbar
              value={progress.progress2}
              text={`${Math.round(progress.progress2)}`}
              styles={{
                root: {
                  margin: 'auto 16px',
                  width: '150px',
                  height: '150px',
                },
                path: {
                  stroke: '#808080',
                  strokeWidth: '4px',
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
            <CircularProgressbar
              value={progress.progress2}
              text={`${Math.round(progress.progress2)}`}
              styles={{
                root: {
                  margin: 'auto 16px',
                  width: '150px',
                  height: '150px',
                },
                path: {
                  stroke: '#808080',
                  strokeWidth: '4px',
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
          </div>

          <div className="flex flex-col gap-4">
            <VerticalLinearEqualizer
              lineCount={52}
              lineWidth={5}
              containerHeight={70}
              colors={[
                { color: '#119892', chance: 1 },
                { color: '#7d7d7d', chance: 1 },
                { color: '#031f1e', chance: 1 },
                { color: '#a6a6a6', chance: 1 },
              ]}
            />
            <SparklineDots
              rows={3}
              columns={20}
              colors={[
                { color: '#000000', chance: 5 },
                { color: '#4f4f4f', chance: 2 },
                { color: '#ebebeb', chance: 1 },
              ]}
            />{' '}
            <SparklineDots
              rows={3}
              columns={20}
              colors={[
                { color: '#000000', chance: 5 },
                { color: '#4f4f4f', chance: 2 },
                { color: '#ebebeb', chance: 1 },
              ]}
            />{' '}
            <SparklineDots
              rows={3}
              columns={35}
              colors={[
                { color: '#000000', chance: 5 },
                { color: '#4f4f4f', chance: 2 },
                { color: '#ebebeb', chance: 1 },
              ]}
            />{' '}
            <SparklineDots
              rows={3}
              columns={35}
              colors={[
                { color: '#000000', chance: 5 },
                { color: '#4f4f4f', chance: 2 },
                { color: '#ebebeb', chance: 1 },
              ]}
            />
          </div>
        </div>
      </div>
      {/*<div className="bg-blue-100 p-4"></div>;*/}
      {/*<div className="bg-green-100 p-4"></div>;*/}
    </div>
  );
}
