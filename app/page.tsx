'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Image from 'next/image';
import SparklineDots from '@/app/components/SparklineDots';
import AudioEqualizer from '@/app/components/AudioEqualizer';
import Input from "@/app/ui/input";
import React from "react";
export default function Page() {
  return (
    <div className="bg-dotted grid h-full min-h-screen grid-cols-3 p-4 ">
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center justify-around px-4">
          <Image
            src="/login/glob.png"
            alt="Globe"
            width={1000}
            height={1000}
            className="h-[137px] w-[137px]"
          />
          <DotLottieReact
            src="/lottie/horizontal-equalizer.json"
            loop
            autoplay
            className="h-[110px] w-[417px]"
          />
        </div>
        <div className="flex flex-row justify-around px-4">
          <div className="flex flex-col">
            <Image
              src="/login/sample-circular-progress-1.png"
              alt="Sample circular progress 1"
              width={100}
              height={100}
              className="h-[180px] w-[170px]"
            />
            <Image
              src="/login/sample-circular-progress-2.png"
              alt="Sample circular progress 2"
              width={100}
              height={100}
              className="h-[180px] w-[170px]"
            />
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
            <Image
              src="/login/sample-sparkline-dots-1.png"
              alt="Sample sparkline dots 1"
              width={100}
              height={100}
              className="h-[78px] w-[306px]"
            />
            <Image
              src="/login/sample-sparkline-dots-2.png"
              alt="Sample sparkline dots 2"
              width={100}
              height={100}
              className="h-[87px] w-[372px]"
            />
          </div>
        </div>
        <Image
          src="/login/sample-rectangle-equalizer-1.png"
          alt="Sample rectangle equalizer 1"
          width={100}
          height={100}
          className="w-full max-w-[496px]"
        />
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
        <Input id={'username'} label={'نام کاربری'} />
        <Input id={'password'} label={'کلمه عبور'}/>
        <button className="w-full bg-primary-500 mt-4 rounded-lg p-3">ورود به سامانه</button>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="/login/iran-map.svg"
          alt="Iran map"
          width={100}
          height={100}
          className="w-full max-w-[390px] bg-transparent"
        />
        <div className="flex flex-row items-center justify-around mb-4">
          <div className="flex flex-col items-center justify-around">
            <Image
              src="/login/sample-sparkline-dots-1.png"
              alt="Sample sparkline dots 1"
              width={100}
              height={100}
              className="h-[78px] w-[306px]"
            />  <Image
              src="/login/sample-sparkline-dots-1.png"
              alt="Sample sparkline dots 1"
              width={100}
              height={100}
              className="h-[78px] w-[306px]"
            />
          </div>
          <Image
            src="/login/sample-circular-progress-1.png"
            alt="Sample circular progress 1"
            width={100}
            height={100}
            className="h-[180px] w-[170px]"
          />
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
            {color : '#121212' , chance: 3 },
            {color: 'transparent', chance: 3 },
            {color: '#0f0f0f', chance: 4 },
          ]}
        />
        <div className="mt-2">

        </div>
        <div className="flex flex-row">
          <Image
            src="/login/rotational-progress-15-op-50.svg"
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
      <div className="w-full absolute bottom-0">
      <AudioEqualizer speed={100} segmentCount={9} barCount={40} colors={['#636363', '#3d3d3d', '#0d736f', '#fbfbfb', '#414141', '#282828', '282828', '414141', '#084a47', '#616161']}/>
    </div>
    </div>
  );
}
