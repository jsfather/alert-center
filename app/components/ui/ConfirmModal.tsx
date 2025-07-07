import React from 'react';
import { ProhibitIcon } from '@phosphor-icons/react';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  variant?: 'danger' | 'primary' | 'warning';
  title: string;
  message: string;
  confirmText: string;
  cancelText: string;
  titleIcon: React.ReactNode;
  confirmIcon: React.ReactNode;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  variant = 'primary',
  title,
  message,
  confirmText,
  cancelText,
  titleIcon,
  confirmIcon,
}) => {
  if (!isOpen) return null;

  const variants = {
    danger: {
      iconColor: 'text-red-400',
      confirmBtn: 'bg-red-400 text-white',
      border: 'border-red-400',
    },
    primary: {
      iconColor: 'text-primary-500',
      confirmBtn: 'bg-primary-500 text-white',
      border: 'border-primary-500',
    },
    warning: {
      iconColor: 'text-yellow-400',
      confirmBtn: 'bg-yellow-400 text-white',
      border: 'border-yellow-400',
    },
  };

  const config = variants[variant];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className={`relative mx-auto w-full max-w-[536px] rounded-lg border-2 bg-neutral-900 p-6 ${config.border} shadow-2xl`}
      >
        <div className="mb-4 flex justify-center">
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-full ${config.iconColor}`}
          >
            {titleIcon}
          </div>
        </div>

        <div className="mb-6 text-center">
          <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
          <p className="text-sm leading-relaxed text-gray-300">{message}</p>
        </div>

        <div className="flex gap-10 px-10">
          <button
            onClick={onConfirm}
            className={`flex flex-2 cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-3 font-medium transition-colors ${config.confirmBtn}`}
          >
            {confirmIcon}
            {confirmText}
          </button>
          <button
            onClick={onClose}
            className={`flex flex-2 cursor-pointer items-center justify-center gap-2 rounded-xl border border-gray-600 px-4 py-3 font-medium text-white transition-colors`}
          >
            <ProhibitIcon weight="bold" size={20} />
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  );
};
