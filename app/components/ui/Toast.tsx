import React, { useState, useEffect } from 'react';
import { X, Check, AlertCircle, Info, AlertTriangle } from 'lucide-react';

export const Toast = ({
                 type = 'success',
                 title = '',
                 message = '',
                 isVisible = false,
                 onClose = () => {},
                 autoClose = true,
                 duration = 5000,
                 position = 'top-right'
               }) => {
  const [show, setShow] = useState(isVisible);

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
      setTimeout(onClose, 300); // Wait for animation to complete
    }
  };

  const getToastStyles = () => {
    const baseStyles = {
      success: 'bg-emerald-600 border-emerald-500',
      error: 'bg-red-600 border-red-500',
      warning: 'bg-orange-600 border-orange-500',
      info: 'bg-blue-600 border-blue-500'
    };
    return baseStyles[type] || baseStyles.success;
  };

  const getIcon = () => {
    const icons = {
      success: <Check className="w-5 h-5 text-white" />,
      error: <AlertCircle className="w-5 h-5 text-white" />,
      warning: <AlertTriangle className="w-5 h-5 text-white" />,
      info: <Info className="w-5 h-5 text-white" />
    };
    return icons[type] || icons.success;
  };

  const getPositionStyles = () => {
    const positions = {
      'top-right': 'top-4 right-4',
      'top-left': 'top-4 left-4',
      'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
      'bottom-right': 'bottom-4 right-4',
      'bottom-left': 'bottom-4 left-4',
      'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2'
    };
    return positions[position] || positions['top-right'];
  };

  if (!show) return null;

  return (
    <div
      className={`
        fixed z-50 ${getPositionStyles()}
        transition-all duration-300 ease-in-out
        ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
      `}
    >
      <div
        className={`
          flex items-start gap-3 p-4 rounded-lg shadow-lg border-l-4 min-w-80 max-w-md
          ${getToastStyles()}
          backdrop-blur-sm
        `}
        dir="rtl"
      >
        {/* Icon */}
        <div className="flex-shrink-0 mt-0.5">
          {getIcon()}
        </div>

        {/* Content */}
        <div className="flex-1 text-right">
          {title && (
            <h4 className="text-white font-semibold mb-1 text-sm">
              {title}
            </h4>
          )}
          {message && (
            <p className="text-white/90 text-sm leading-relaxed">
              {message}
            </p>
          )}
        </div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="flex-shrink-0 p-1 rounded-full hover:bg-white/20 transition-colors duration-200"
          aria-label="بستن"
        >
          <X className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
};