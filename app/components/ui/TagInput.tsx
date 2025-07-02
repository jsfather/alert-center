'use client';

import { useState, KeyboardEvent } from 'react';
import TextInput from '@/app/components/ui/TextInput';
import { X } from 'lucide-react';

type TagInputProps = {
  label?: string;
  value?: string[];
  onChange?: (tags: string[]) => void;
  initialTags?: string[];
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

export default function TagInput({
  label,
  value,
  onChange,
  initialTags = [],
  ...props
}: TagInputProps) {
  const [internalTags, setInternalTags] = useState<string[]>(initialTags);
  const [input, setInput] = useState('');

  const tags = value !== undefined ? value : internalTags;

  const updateTags = (newTags: string[]) => {
    if (onChange) {
      onChange(newTags);
    } else {
      setInternalTags(newTags);
    }
  };

  const addTag = (tag: string) => {
    const trimmed = tag.trim();
    if (trimmed && !tags.includes(trimmed)) {
      updateTags([...tags, trimmed]);
    }
    setInput('');
  };

  const removeTag = (tagToRemove: string) => {
    updateTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',' || e.key === ' ') {
      e.preventDefault();
      if (input.trim()) addTag(input);
    } else if (e.key === 'Backspace' && !input && tags.length) {
      removeTag(tags[tags.length - 1]);
    }
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <TextInput
        label={label}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        {...props}
      />

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <div
            key={tag}
            className="flex items-center gap-2 rounded-full border border-neutral-400 bg-transparent px-3 py-2 select-none"
          >
            <span className="text-neutral-400">#{tag}</span>
            <button
              onClick={() => removeTag(tag)}
              className="text-neutral-400 hover:text-neutral-600"
              type="button"
            >
              <X
                size={20}
                className="cursor-pointer rounded-full border-1 border-neutral-400 p-0.5"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
