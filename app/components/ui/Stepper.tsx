'use client';

import { cn } from '@/app/lib/utils';

interface Step {
  title: string;
  description?: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}

const Stepper = ({ steps, currentStep, className }: StepperProps) => {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <div key={index} className="flex items-center">
            {index > 0 && (
              <div
                className={cn(
                  'h-[1px] w-24 transition-colors duration-200',
                  isCompleted ? 'bg-primary-500' : 'bg-neutral-700'
                )}
              />
            )}
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm transition-colors duration-200',
                  isActive
                    ? 'border-primary-500 bg-primary-500 text-white'
                    : isCompleted
                    ? 'border-primary-500 bg-primary-500/10 text-primary-500'
                    : 'border-neutral-700 bg-neutral-700/10 text-neutral-700'
                )}
              >
                {index + 1}
              </div>
              <div
                className={cn(
                  'mt-2 whitespace-nowrap text-xs transition-colors duration-200',
                  isActive || isCompleted ? 'text-primary-500' : 'text-neutral-700'
                )}
              >
                {step.title}
              </div>
              {step.description && (
                <div className="mt-1 text-[10px] text-neutral-500">
                  {step.description}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper; 