'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Image from 'next/image';

export default function Page() {

  return (
    <div className="h-full">
      <div className="grid grid-cols-4">
        {/*Radar*/}
        <DotLottieReact src="/lottie/radar.json" loop autoplay />
        {/*Progress Bars Chart*/}
        <DotLottieReact src="/lottie/progress-bars-chart.json" loop autoplay />
        {/*Progress Bars Chart (Rounded)*/}
        <DotLottieReact
          src="/lottie/progress-bars-chart-rounded.json"
          loop
          autoplay
        />
        {/*Rotational Progresses*/}
        <div className="flex flex-row flex-wrap-reverse items-center justify-center">
          <Image
            src="/login/rotational-progress-15.svg"
            alt="rotational-progress-15"
            width={100}
            height={100}
            className="animate-spin"
          />
          <Image
            src="/login/rotational-progress-50.svg"
            alt="rotational-progress-15"
            width={100}
            height={100}
            className="animate-spin"
          />
          <Image
            src="/login/rotational-progress-75.svg"
            alt="rotational-progress-50"
            width={100}
            height={100}
            className="animate-spin"
          />
          <Image
            src="/login/rotational-progress-90.svg"
            alt="rotational-progress-15"
            width={100}
            height={100}
            className="animate-spin"
          />
          <Image
            src="/login/rotational-progress-15-op-50.svg"
            alt="rotational-progress-15"
            width={100}
            height={100}
            className="animate-spin"
          />
        </div>
      </div>
    </div>
  );
}
