'use client';

import { cn } from '@/app/lib/utils';
import { Calendar } from 'lucide-react';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import './DateTimePicker.css';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';

interface DateTimePickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  className?: string;
}

const DateTimePicker = ({ label, error, className }: DateTimePickerProps) => {
  return (
    <div className={cn('w-full', className)}>
      <label className="mb-2 block text-sm font-medium text-stone-400">
        {label}
      </label>
      <div className="relative">
        <Calendar
          size={16}
          className="absolute top-1/2 right-4 -translate-y-1/2 transform text-stone-400"
        />
        <DatePicker
          calendar={persian}
          locale={persian_fa}
          format="YYYY/MM/DD - HH:mm:ss"
          plugins={[<TimePicker key={1} position="bottom" />]}
          className={'custom-rmdp'}
          containerStyle={{width: '100%'}}
          inputClass={cn(
            'w-full bg-[#3b3b3b]  rounded-sm border pr-12 pl-4 pt-2 pb-1 text-md h-[55px] text-white',
            'focus:border-primary-500 focus:ring-primary-500 border-stone-600 focus:shadow-sm focus:ring-1 focus:shadow-primary-400 focus:outline-none',
            'placeholder:text-stone-500 font-light',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500'
          )}
        />

      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default DateTimePicker;
