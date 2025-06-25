'use client'

import { ConfirmModal } from '@/app/components/ui/ConfirmModal';
import { useState } from 'react';
import { TrashIcon } from 'lucide-react'


export default function Page() {
  const [dangerModal, setDangerModal] = useState(false);
  return (
    <div>
      <button
        onClick={() => setDangerModal(true)}
        className="rounded-lg bg-green-500 px-6 py-3 font-medium text-white transition-colors hover:bg-green-600"
      >
        Show Success Modal
      </button>
      <ConfirmModal
        isOpen={dangerModal}
        onClose={() => setDangerModal(false)}
        onConfirm={() => {
          alert('Confirmed danger action!');
          setDangerModal(false);
        }}
        titleIcon={TrashIcon}
        confirmIcon={TrashIcon}
        variant="danger"
        title="آیا از حذف داشبورد اطمینان دارید؟"
        message="با حذف داشبورد امکان بازیابی و دسترسی مجدد به آن وجود نخواهد داشت."
        confirmText="حذف داشبورد"
        cancelText="انصراف"
      />
    </div>
  );
}
