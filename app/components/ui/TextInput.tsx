'use client';

import { cn } from '@/app/lib/utils';
import React, { InputHTMLAttributes } from 'react';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  appendIcon?: React.ReactNode;
  onAppendClick?: () => void;
  error?: string;
  className?: string;
}

const TextInput = ({
  label,
  appendIcon,
  onAppendClick,
  error,
  className,
  ...props
}: TextFieldProps) => {
  return (
    <div className={cn('w-full', className)}>
      <label className="mb-2 block font-medium text-neutral-300">{label}</label>
      <div className="relative w-full">
        <input
          {...props}
          className={cn(
            'relative h-[55px] w-full rounded-sm border bg-[#3b3b3b] px-4 font-light text-white',
            'focus:border-primary-500 focus:ring-primary-500 focus:shadow-primary-400 border-stone-600 placeholder-stone-400 focus:shadow-sm focus:ring-1 focus:outline-none',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
            appendIcon && 'pl-10'
          )}
        />
        {appendIcon && (
          <button
            type="button"
            onClick={onAppendClick}
            className={cn(
              'absolute top-1/2 left-4 -translate-y-1/2 text-neutral-400',
              !!onAppendClick && 'cursor-pointer'
            )}
          >
            {appendIcon}
          </button>
        )}
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default TextInput;
