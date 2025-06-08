'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function LottiePlayer() {
  return (
    <div className="h-64 w-64 bg-blue-400">
      <DotLottieReact src="/lottie/test.json" loop autoplay />
    </div>
  );
}
