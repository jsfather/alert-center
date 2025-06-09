'use client';

import { cn } from '@/app/lib/utils';
import { TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  className?: string;
}

const TextArea = ({ label, error, className, ...props }: TextAreaProps) => {
  return (
    <div className={cn('w-full', className)}>
      <label className="mb-2 block text-sm font-medium text-stone-400">
        {label}
      </label>
      <textarea
        {...props}
        className={cn(
          'w-full rounded-md border bg-neutral-800/50 px-4 py-2.5 text-sm text-white',
          'focus:border-primary-500 focus:ring-primary-500 focus:shadow-primary-400 border-stone-600 focus:shadow-sm focus:ring-1 focus:outline-none',
          'min-h-[120px] resize-y placeholder:text-stone-500',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500'
        )}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default TextArea;
