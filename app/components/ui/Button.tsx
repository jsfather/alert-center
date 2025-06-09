'use client';

import { cn } from '@/app/lib/utils';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary';
type IconPosition = 'start' | 'end';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  isLoading?: boolean;
  className?: string;
  children: ReactNode;
}

const Button = ({
  variant = 'primary',
  icon,
  iconPosition = 'start',
  isLoading = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) => {
  const variants = {
    primary:
      'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500/30 focus:shadow-[0_0_0_1px] focus:shadow-primary-500',
    secondary:
      'bg-neutral-800 text-stone-400 hover:bg-neutral-700 focus:ring-neutral-700/30 focus:shadow-[0_0_0_1px] focus:shadow-neutral-700',
  };

  return (
    <button
      disabled={isLoading || disabled}
      className={cn(
        'flex items-center justify-center gap-2 rounded-md px-6 py-2 text-sm font-medium',
        'transition-all duration-200',
        'focus:ring-[3px] focus:outline-none',
        'cursor-pointer disabled:cursor-not-allowed disabled:opacity-60',
        variants[variant],
        iconPosition === 'end' && 'flex-row-reverse',
        className
      )}
      {...props}
    >
      {isLoading ? (
        <svg
          className="h-4 w-4 animate-spin"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        icon && <span className="h-4 w-4">{icon}</span>
      )}
      {children}
    </button>
  );
};

export default Button;
