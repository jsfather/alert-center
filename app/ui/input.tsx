'use client'

import { useState } from 'react';
import { clsx } from 'clsx';

type InputProps = {
  id: string;
  label?: string;
  placeholder?: string;
  error?: string;
};

export default function Input(props: InputProps) {
  const [value, setValue] = useState('');

  return (
    <div className="w-full">
      <label
        htmlFor={props.id}
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        {props.label}
      </label>
      <input
        id={props.id}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={props.placeholder}
        className={`${clsx({
          'border-red-400 ring-2 ring-red-300 focus:border-red-400 focus:ring-red-400 focus:outline-none':
            props.error,
        })} focus:ring-primary-500 focus:border-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border focus:ring-2 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400`}
      />
      <div className="mt-2 text-sm text-red-500">{props.error}</div>
    </div>
  );
}
