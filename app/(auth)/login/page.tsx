'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Image from 'next/image';
import SparklineDots from '@/app/components/ui/auth/login/SparklineDots';
import BottomEqualizer from '@/app/components/ui/auth/login/BottomEqualizer';
import Input from '@/app/components/ui/Input';
import React, { useState, useEffect } from 'react';
import { LockKeyholeOpen, UserSquare2 } from 'lucide-react';
import CircularProgress from '@/app/components/ui/auth/login/CircularProgress';
import BlockEqualizer from '@/app/components/ui/auth/login/BlockEqualizer';
import { useRouter } from 'next/navigation';
import HorizontalEqualizer from '@/app/components/ui/auth/login/HorizontalEqualizer';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="border-t-primary-500 h-24 w-24 animate-spin rounded-full border-2"></div>
    </div>
  );
};

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}

      <div
        className={`bg-dotted grid h-full min-h-screen grid-cols-3 p-4 transition-opacity duration-1000 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="flex flex-col items-center">
          <div className="flex flex-row items-center justify-around px-4">
            <Image
              src="/login/glob.png"
              alt="Globe"
              width={1000}
              height={1000}
              className="h-[137px] w-[137px]"
              priority
            />
            <div className="h-[110px] w-[417px]">
              <HorizontalEqualizer />
            </div>
          </div>
          <div className="flex flex-row justify-around px-4">
            <div className="flex flex-col">
              <div className="p-4">
                <CircularProgress targetPercentage={60} changeDelay={500} />
              </div>
              <div className="p-4">
                <CircularProgress targetPercentage={90} changeDelay={1000} />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <DotLottieReact
                src="/lottie/vertical-equalizer.json"
                loop
                autoplay
                height={100}
                width={100}
                className="h-[120px] w-[374px]"
              />
              <div className="flex flex-col gap-12">
                <SparklineDots
                  rows={3}
                  columns={31}
                  shape={'circle'}
                  squareSize={7}
                  colors={[
                    { color: '#707070', chance: 1 },
                    { color: '#ffffff', chance: 1 },
                    {
                      color: '#242424',
                      chance: 2,
                    },
                    { color: '#121212', chance: 3 },
                    { color: 'transparent', chance: 3 },
                    { color: '#0f0f0f', chance: 4 },
                  ]}
                />
                <SparklineDots
                  rows={3}
                  columns={40}
                  shape={'circle'}
                  squareSize={7}
                  colors={[
                    { color: '#707070', chance: 1 },
                    { color: '#ffffff', chance: 1 },
                    {
                      color: '#242424',
                      chance: 2,
                    },
                    { color: '#121212', chance: 3 },
                    { color: 'transparent', chance: 3 },
                    { color: '#0f0f0f', chance: 4 },
                  ]}
                />
                <SparklineDots
                  rows={3}
                  columns={40}
                  shape={'circle'}
                  squareSize={7}
                  colors={[
                    { color: '#707070', chance: 1 },
                    { color: '#ffffff', chance: 1 },
                    {
                      color: '#242424',
                      chance: 2,
                    },
                    { color: '#121212', chance: 3 },
                    { color: 'transparent', chance: 3 },
                    { color: '#0f0f0f', chance: 4 },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="flex h-[150px] w-full flex-col px-12">
            <BlockEqualizer />
          </div>
          <div className="flex flex-row items-center justify-around px-4">
            <DotLottieReact
              src="/lottie/progress-bars-chart-rounded.json"
              loop
              autoplay
              className="h-[190px] w-[190px]"
            />
            <DotLottieReact
              src="/lottie/radar-complex.json"
              loop
              autoplay
              className="h-[190px] w-[190px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <DotLottieReact
            src="/lottie/globe.json"
            loop
            autoplay
            className="h-[500px] w-[500px]"
          />
          <h1 className="text-primary-500 text-6xl font-black">مرکز هشدار</h1>
          <div className="z-50 mt-4 flex w-2/3 flex-col px-4">
            <Input
              id={'username'}
              placeholder={'نام کاربری'}
              prependIcon={<UserSquare2 className="text-primary-500" />}
            />
            <Input
              id={'password'}
              placeholder={'کلمه عبور'}
              type="password"
              prependIcon={<LockKeyholeOpen className="text-primary-500" />}
            />
            <button
              className="bg-primary-500 mt-2 w-full cursor-pointer rounded-lg p-3"
              onClick={() => router.push('/dashboard')}
            >
              ورود به سامانه
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <DotLottieReact
            src="/lottie/iran-map.json"
            loop
            autoplay
            className="h-[400px] w-[600px]"
          />
          <div className="mb-4 flex flex-row items-center justify-around">
            <div className="flex flex-col items-center justify-around">
              <SparklineDots
                rows={3}
                columns={30}
                shape={'circle'}
                squareSize={5}
                colors={[
                  { color: '#707070', chance: 1 },
                  { color: '#ffffff', chance: 1 },
                  {
                    color: '#242424',
                    chance: 2,
                  },
                  { color: '#121212', chance: 3 },
                  { color: 'transparent', chance: 3 },
                  { color: '#0f0f0f', chance: 4 },
                ]}
              />
              <SparklineDots
                rows={3}
                columns={39}
                shape={'circle'}
                squareSize={5}
                colors={[
                  { color: '#707070', chance: 1 },
                  { color: '#ffffff', chance: 1 },
                  {
                    color: '#242424',
                    chance: 2,
                  },
                  { color: '#121212', chance: 3 },
                  { color: 'transparent', chance: 3 },
                  { color: '#0f0f0f', chance: 4 },
                ]}
              />
              <SparklineDots
                rows={3}
                columns={35}
                shape={'circle'}
                squareSize={5}
                colors={[
                  { color: '#707070', chance: 1 },
                  { color: '#ffffff', chance: 1 },
                  {
                    color: '#242424',
                    chance: 2,
                  },
                  { color: '#121212', chance: 3 },
                  { color: 'transparent', chance: 3 },
                  { color: '#0f0f0f', chance: 4 },
                ]}
              />
              <SparklineDots
                rows={3}
                columns={30}
                shape={'circle'}
                squareSize={5}
                colors={[
                  { color: '#707070', chance: 1 },
                  { color: '#ffffff', chance: 1 },
                  {
                    color: '#242424',
                    chance: 2,
                  },
                  { color: '#121212', chance: 3 },
                  { color: 'transparent', chance: 3 },
                  { color: '#0f0f0f', chance: 4 },
                ]}
              />
            </div>
            <div className="max-w-[160px] p-4">
              <CircularProgress targetPercentage={35} changeDelay={2000} />
            </div>
          </div>
          <SparklineDots
            rows={3}
            columns={31}
            shape={'square'}
            colors={[
              { color: '#19ddd5', chance: 1 },
              { color: '#ffffff', chance: 1 },
              {
                color: '#242424',
                chance: 2,
              },
              { color: '#121212', chance: 3 },
              { color: 'transparent', chance: 3 },
              { color: '#0f0f0f', chance: 4 },
            ]}
          />
          <div className="mt-2"></div>
          <div className="flex flex-row">
            <Image
              src="/auth/login/rotational-progress-15-op-50.svg"
              alt="Sample circular progress 1"
              width={100}
              height={100}
              className="h-[150px] w-[150px] animate-spin"
            />
            <DotLottieReact
              src="/lottie/progress-bars-chart.json"
              loop
              autoplay
              className="h-[150px] w-[150px]"
            />
            <DotLottieReact
              src="/lottie/radar.json"
              loop
              autoplay
              className="h-[145px] w-[145px]"
            />
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <BottomEqualizer />
        </div>
      </div>
    </>
  );
}
