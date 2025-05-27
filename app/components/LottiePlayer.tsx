'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function LottiePlayer() {
    return (
        <div className="w-64 h-64 bg-blue-400">
          <DotLottieReact
            src="/lottie/test.json"
            loop
            autoplay
          />
        </div>
    );
}
