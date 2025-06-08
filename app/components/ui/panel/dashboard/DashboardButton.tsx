import styles from './DashboardButton.module.css';
import type { ButtonHTMLAttributes } from 'react';

interface DashboardButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  prepend?: React.ReactNode;
}

export default function DashboardButton({
  title = 'کلید',
  className,
  prepend,
  ...rest
}: DashboardButtonProps) {
  return (
    <button
      className={`text-md relative flex cursor-pointer flex-row-reverse items-center justify-center overflow-hidden px-3 text-white ${className ?? ''}`}
      {...rest}
      style={{
        padding: '10px 12px 6px 12px',
      }}
    >
      <span
        className={`absolute inset-0 z-0 bg-gradient-to-r from-teal-600 to-teal-900 ${styles.hexagon}`}
      />

      <span className="z-10 flex flex-row gap-2">
        {prepend}
        {title}
      </span>
    </button>
  );
}
