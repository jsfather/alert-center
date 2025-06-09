'use client';

import { cn } from '@/app/lib/utils';
import { InputHTMLAttributes } from 'react';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  className?: string;
}

const TextField = ({ label, error, className, ...props }: TextFieldProps) => {
  return (
    <div className={cn('w-full', className)}>
      <label className="mb-2 block text-sm font-medium text-stone-400">
        {label}
      </label>
      <input
        {...props}
        className={cn(
          'w-full rounded-md border bg-neutral-800/50 px-4 py-2.5 text-sm text-white',
          'focus:border-primary-500 focus:ring-primary-500 border-stone-600 focus:shadow-sm focus:ring-1 focus:shadow-primary-400 focus:outline-none',
          'placeholder:text-stone-500',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500'
        )}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default TextField;
