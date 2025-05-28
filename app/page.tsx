'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="bg-dotted grid h-full min-h-screen grid-cols-3  p-4">
      <div className="flex flex-col  items-center">
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
              className="h-[120px] w-[374px] "
            />
            <Image
              src="/login/sample-sparkline-dots-1.png"
              alt="Sample sparkline dots 1"
              width={100}
              height={100}
              className="h-[78px] w-[306px]"
            /><Image
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
          className="w-full max-w-[496px] "
        />
        <div className="flex flex-row justify-around px-4 items-center">
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
      <div className="flex flex-col items-center ">
        <DotLottieReact
          src="/lottie/globe.json"
          loop
          autoplay
          className="h-[500px] w-[500px]"
        />
        <h1 className="text-primary-500 text-6xl font-black">مرکز هشدار</h1>
      </div>
      <div className=""></div>
    </div>
  );
}
