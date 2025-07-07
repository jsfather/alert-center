import React, { useState, useEffect, JSX } from 'react';
import { X, Check, AlertCircle, Info, AlertTriangle } from 'lucide-react';

type ToastType = 'success' | 'error' | 'warning' | 'info';

type ToastPosition =
  | 'top-right'
  | 'top-left'
  | 'top-center'
  | 'bottom-right'
  | 'bottom-left'
  | 'bottom-center';

interface ToastProps {
  type?: ToastType;
  title?: string;
  message?: string;
  isVisible?: boolean;
  onClose?: () => void;
  autoClose?: boolean;
  duration?: number;
  position?: ToastPosition;
}

export const Toast: React.FC<ToastProps> = ({
  type = 'success',
  title = '',
  message = '',
  isVisible = false,
  onClose = () => {},
  autoClose = true,
  duration = 5000,
  position = 'top-right',
}) => {
  const [show, setShow] = useState<boolean>(isVisible);

  useEffect(() => {
    setShow(isVisible);
  }, [isVisible]);

  useEffect(() => {
    if (show && autoClose) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, autoClose, duration]);

  const handleClose = () => {
    setShow(false);
    if (onClose) {
      setTimeout(onClose, 300);
    }
  };

  const getToastStyles = (): string => {
    const baseStyles: Record<ToastType, string> = {
      success: 'bg-emerald-600 border-emerald-500',
      error: 'bg-red-600 border-red-500',
      warning: 'bg-orange-600 border-orange-500',
      info: 'bg-blue-600 border-blue-500',
    };
    return baseStyles[type] || baseStyles.success;
  };

  const getIcon = () => {
    const icons: Record<ToastType, JSX.Element> = {
      success: <Check className="h-5 w-5 text-white" />,
      error: <AlertCircle className="h-5 w-5 text-white" />,
      warning: <AlertTriangle className="h-5 w-5 text-white" />,
      info: <Info className="h-5 w-5 text-white" />,
    };
    return icons[type] || icons.success;
  };

  const getPositionStyles = (): string => {
    const positions: Record<ToastPosition, string> = {
      'top-right': 'top-4 right-4',
      'top-left': 'top-4 left-4',
      'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
      'bottom-right': 'bottom-4 right-4',
      'bottom-left': 'bottom-4 left-4',
      'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2',
    };
    return positions[position] || positions['top-right'];
  };

  if (!show) return null;

  return (
    <div
      className={`fixed z-50 ${getPositionStyles()} transition-all duration-300 ease-in-out ${show ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'} `}
    >
      <div
        className={`flex max-w-md min-w-80 items-start gap-3 rounded-lg border-l-4 p-4 shadow-lg ${getToastStyles()} backdrop-blur-sm`}
        dir="rtl"
      >
        <div className="mt-0.5 flex-shrink-0">{getIcon()}</div>

        <div className="flex-1 text-right">
          {title && (
            <h4 className="mb-1 text-sm font-semibold text-white">{title}</h4>
          )}
          {message && (
            <p className="text-sm leading-relaxed text-white/90">{message}</p>
          )}
        </div>

        <button
          onClick={handleClose}
          className="flex-shrink-0 rounded-full p-1 transition-colors duration-200 hover:bg-white/20"
          aria-label="بستن"
        >
          <X className="h-4 w-4 text-white" />
        </button>
      </div>
    </div>
  );
};
