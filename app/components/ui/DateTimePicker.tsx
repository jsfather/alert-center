'use client';

import { cn } from '@/app/lib/utils';
import { useState } from 'react';
import { Calendar } from 'lucide-react';

interface DateTimePickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  className?: string;
}

const DateTimePicker = ({
  label,
  value,
  onChange,
  error,
  className,
}: DateTimePickerProps) => {
  return (
    <div className={cn('w-full', className)}>
      <label className="mb-2 block text-sm font-medium text-stone-400">
        {label}
      </label>
      <div className="relative">
        <input
          type="datetime-local"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(
            'w-full rounded-md border bg-neutral-800/50 px-4 py-2.5 text-sm text-white',
            'focus:border-primary-500 focus:ring-primary-500 border-stone-600 focus:shadow-sm focus:ring-1 focus:shadow-primary-400 focus:outline-none',
            'placeholder:text-stone-500',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500'
          )}
        />
        <Calendar
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 transform text-stone-400"
        />
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default DateTimePicker; 