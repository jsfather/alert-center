'use client';

import { cn } from '@/app/lib/utils';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, X } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  options: SelectOption[];
  value: string | string[];
  onChange: (value: string | string[]) => void;
  multiple?: boolean;
  error?: string;
  placeholder?: string;
  className?: string;
}

const Select = ({
  label,
  options,
  value,
  onChange,
  multiple = false,
  error,
  placeholder = 'انتخاب کنید',
  className,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedLabels = Array.isArray(value)
    ? options.filter((opt) => value.includes(opt.value)).map((opt) => opt.label)
    : options.find((opt) => opt.value === value)?.label;

  const handleSelect = (optionValue: string) => {
    if (multiple) {
      const newValue = Array.isArray(value) ? value : [];
      if (newValue.includes(optionValue)) {
        onChange(newValue.filter((v) => v !== optionValue));
      } else {
        onChange([...newValue, optionValue]);
      }
    } else {
      onChange(optionValue);
      setIsOpen(false);
    }
  };

  const removeValue = (optionValue: string) => {
    if (multiple && Array.isArray(value)) {
      onChange(value.filter((v) => v !== optionValue));
    }
  };

  return (
    <div className={cn('w-full', className)} ref={selectRef}>
      <label className="mb-2 block text-sm font-medium text-stone-400">
        {label}
      </label>
      <div
        className={cn(
          'relative w-full cursor-pointer rounded-md border bg-neutral-800/50 px-4 py-2.5 text-sm text-white',
          'focus:border-primary-500 focus:ring-primary-500 border-stone-600 focus:shadow-sm focus:ring-1 focus:shadow-primary-400',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500'
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex min-h-[1.5rem] flex-wrap gap-2">
          {multiple && Array.isArray(value) && value.length > 0 ? (
            value.map((v) => {
              const option = options.find((opt) => opt.value === v);
              return (
                option && (
                  <span
                    key={v}
                    className="flex items-center gap-1 rounded bg-primary-500/20 px-2 py-0.5 text-primary-400"
                  >
                    {option.label}
                    <X
                      size={14}
                      className="cursor-pointer hover:text-primary-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeValue(v);
                      }}
                    />
                  </span>
                )
              );
            })
          ) : selectedLabels ? (
            <span>{selectedLabels}</span>
          ) : (
            <span className="text-stone-500">{placeholder}</span>
          )}
        </div>
        <ChevronDown
          size={16}
          className={cn(
            'absolute left-4 top-1/2 -translate-y-1/2 transform text-stone-400 transition-transform',
            isOpen && 'rotate-180'
          )}
        />
      </div>
      {isOpen && (
        <div className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-stone-600 bg-neutral-800 py-1 shadow-lg">
          {options.map((option) => {
            const isSelected = multiple
              ? Array.isArray(value) && value.includes(option.value)
              : value === option.value;
            return (
              <div
                key={option.value}
                className={cn(
                  'cursor-pointer px-4 py-2 text-sm text-white hover:bg-neutral-700',
                  isSelected && 'bg-primary-500/20 text-primary-400'
                )}
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </div>
            );
          })}
        </div>
      )}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default Select; 