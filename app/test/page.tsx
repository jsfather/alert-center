'use client';

import React from 'react';
import Card from '@/app/components/dashboard/Card';

export default function Page() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="w-1/2">
        <Card />
      </div>
    </div>
  );
}
