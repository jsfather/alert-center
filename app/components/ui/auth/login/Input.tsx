'use client';

import { useState } from 'react';
import { clsx } from 'clsx';
import { Eye, EyeClosed } from 'lucide-react';

type InputProps = {
  id: string;
  label?: string;
  placeholder?: string;
  error?: string;
  type?: string;
  prependIcon?: React.ReactNode;
};

export default function Input(props: InputProps) {
  const [value, setValue] = useState('');
  const [eye, setEye] = useState(true);

  return (
    <div className="w-full">
      <label
        htmlFor={props.id}
        className="mb-2 block text-sm font-medium text-white"
      >
        {props.label}
      </label>
      <div
        className={`${clsx({
          'border-red-400 ring-2 ring-red-300 focus-within:border-red-400 focus-within:ring-red-400':
            props.error,
          'focus-within:border-primary-500 focus-within:ring-primary-500':
            !props.error,
        })} flex items-center rounded-lg border border-gray-600 bg-black/50 focus-within:ring-2`}
      >
        {props.prependIcon && (
          <span className="flex items-center pr-3 text-gray-300">
            {props.prependIcon}
          </span>
        )}
        <input
          id={props.id}
          type={eye ? props.type : 'text'}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={props.placeholder}
          className="block w-full bg-transparent p-2.5 text-sm text-white placeholder-gray-400 focus:outline-none"
        />
        {props.type === 'password' && (
          <button
            className="flex cursor-pointer items-center pl-3 text-gray-400"
            onClick={() => setEye(!eye)}
          >
            {eye ? <Eye /> : <EyeClosed />}
          </button>
        )}
      </div>
      <div className="mt-2 text-sm text-red-500">{props.error}</div>
    </div>
  );
}
