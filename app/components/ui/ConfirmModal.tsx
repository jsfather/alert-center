import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  variant?: 'danger' | 'success';
  title: string;
  message: string;
  confirmText: string;
  cancelText: string;
  titleIcon: LucideIcon;
  confirmIcon: LucideIcon;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  variant = 'danger',
  title,
  message,
  confirmText,
  cancelText,
  titleIcon: TitleIcon,
  confirmIcon: ConfirmIcon,
}) => {
  if (!isOpen) return null;

  const variants = {
    danger: {
      iconColor: 'text-red-400',
      confirmBtn: 'bg-red-400 text-white',
      border: 'border-red-400',
    },
    success: {
      iconColor: 'text-green-400',
      confirmBtn: 'bg-green-500 text-white',
      border: 'border-green-400',
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
        className={`relative mx-auto w-full max-w-md rounded-lg border-2 bg-neutral-900 p-6 ${config.border} shadow-2xl`}
      >
        <div className="mb-4 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full">
            <TitleIcon className={`h-8 w-8 ${config.iconColor}`} />
          </div>
        </div>

        <div className="mb-6 text-center">
          <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
          <p className="text-sm leading-relaxed text-gray-300">{message}</p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onConfirm}
            className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-3 font-medium transition-colors ${config.confirmBtn}`}
          >
            <ConfirmIcon className="h-4 w-4" />
            {confirmText}
          </button>
          <button
            onClick={onClose}
            className="flex-1 cursor-pointer rounded-xl border border-gray-600 bg-transparent px-4 py-3 font-medium text-gray-300 transition-colors hover:bg-gray-800"
          >
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  );
};
