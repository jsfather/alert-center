'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Image from 'next/image';
import Input from '@/app/ui/input'
import React from 'react';
import AudioEqualizer from '../components/AudioEqualizer';

export default function Page() {
  return (
    <div className="h-full flex flex-col items-center justify-center  ">

      <div className='w-1/2 '>

        <Input id={'username'} label={'نام کاربری'} />
        <Input id={'password'} label={'کلمه عبور'}/>
        <button className="w-full bg-primary-500 mt-4 rounded-lg p-3">ورود به سامانه</button>

    <AudioEqualizer speed={100} segmentCount={9} barCount={5} colors={['#636363', '#3d3d3d', '#0d736f', '#fbfbfb', '#414141', '#282828', '282828', '414141', '#084a47', '#616161']}/>
    </div>

      {/*<div className="grid grid-cols-4">*/}
      {/*  /!*Radar*!/*/}
      {/*  <DotLottieReact src="/lottie/radar.json" loop autoplay />*/}
      {/*  /!*Progress Bars Chart*!/*/}
      {/*  <DotLottieReact src="/lottie/progress-bars-chart.json" loop autoplay />*/}
      {/*  /!*Progress Bars Chart (Rounded)*!/*/}
      {/*  <DotLottieReact*/}
      {/*    src="/lottie/progress-bars-chart-rounded.json"*/}
      {/*    loop*/}
      {/*    autoplay*/}
      {/*  />*/}
      {/*  /!*Rotational Progresses*!/*/}
      {/*  <div className="flex flex-row flex-wrap-reverse items-center justify-center">*/}
      {/*    <Image*/}
      {/*      src="/login/rotational-progress-15.svg"*/}
      {/*      alt="rotational-progress-15"*/}
      {/*      width={100}*/}
      {/*      height={100}*/}
      {/*      className="animate-spin"*/}
      {/*    />*/}
      {/*    <Image*/}
      {/*      src="/login/rotational-progress-50.svg"*/}
      {/*      alt="rotational-progress-15"*/}
      {/*      width={100}*/}
      {/*      height={100}*/}
      {/*      className="animate-spin"*/}
      {/*    />*/}
      {/*    <Image*/}
      {/*      src="/login/rotational-progress-75.svg"*/}
      {/*      alt="rotational-progress-50"*/}
      {/*      width={100}*/}
      {/*      height={100}*/}
      {/*      className="animate-spin"*/}
      {/*    />*/}
      {/*    <Image*/}
      {/*      src="/login/rotational-progress-90.svg"*/}
      {/*      alt="rotational-progress-15"*/}
      {/*      width={100}*/}
      {/*      height={100}*/}
      {/*      className="animate-spin"*/}
      {/*    />*/}
      {/*    <Image*/}
      {/*      src="/login/rotational-progress-15-op-50.svg"*/}
      {/*      alt="rotational-progress-15"*/}
      {/*      width={100}*/}
      {/*      height={100}*/}
      {/*      className="animate-spin"*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <DotLottieReact*/}
      {/*    src="/lottie/globe.json"*/}
      {/*    loop*/}
      {/*    autoplay*/}
      {/*    className="h-[500px] w-[500px]"*/}
      {/*  />*/}
      {/*  <DotLottieReact src="/lottie/radar-complex.json" loop autoplay />*/}
      {/*  <DotLottieReact src="/lottie/horizontal-equalizer.json" loop autoplay />*/}
      {/*  <DotLottieReact src="/lottie/vertical-equalizer.json" loop autoplay />*/}
      {/*</div>*/}
    </div>
  );
}
