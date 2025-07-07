import React, { useEffect, useState } from 'react';
import { Edit3, HelpCircle, Sliders, X, CheckLine } from 'lucide-react';
import TextInput from '@/app/components/ui/TextInput';
import TagInput from '@/app/components/ui/TagInput';
import Button from '@/app/components/ui/Button';

interface QueryBuilderProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyQuery: (query: string) => void;
  initialQuery?: string;
}

const QueryBuilder: React.FC<QueryBuilderProps> = ({
  isOpen,
  onClose,
  onApplyQuery,
  initialQuery = '',
}) => {
  const [andTerms, setAndTerms] = useState<string[]>([]);
  const [orTerms, setOrTerms] = useState<string[]>([]);
  const [notTerms, setNotTerms] = useState<string[]>([]);
  const [finalQuery, setFinalQuery] = useState<string>('');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedQuery, setEditedQuery] = useState<string>('');

  const generateQueryString = (
    andArr: string[],
    orArr: string[],
    notArr: string[]
  ) => {
    const andClause = andArr.filter(Boolean).join(' AND ');

    let orClause = orArr.filter(Boolean).join(' OR ');
    if (orClause && orArr.length > 1) {
      orClause = `(${orClause})`;
    }

    const notClause = notArr
      .filter(Boolean)
      .map((word) => `NOT ${word}`)
      .join(' ');

    let finalQuery = [andClause, orClause].filter(Boolean).join(' AND ');

    if (notClause) {
      finalQuery += (finalQuery ? ' ' : '') + notClause;
    }

    return finalQuery.trim();
  };

  const parseQueryString = (queryString: string) => {
    const pandWords: string[] = [];
    const porWords: string[] = [];
    const pnotWords: string[] = [];

    if (!queryString) {
      return { pandWords, porWords, pnotWords };
    }

    let normalized = queryString.replace(/\s+/g, ' ').trim();

    const notRegex = /NOT\s+(.+?)(?=\s+AND\s+|$)/gi;
    let match;
    while ((match = notRegex.exec(normalized)) !== null) {
      const phrase = match[1].replace(/[()]/g, '').trim();
      pnotWords.push(phrase);
    }
    normalized = normalized.replace(notRegex, '').trim();

    const andChunks = normalized
      .split(/\s+AND\s+/i)
      .map((c) => c.trim())
      .filter(Boolean);

    andChunks.forEach((chunk) => {
      chunk = chunk.trim();

      const startsWithParen = chunk.startsWith('(');
      const endsWithParen = chunk.endsWith(')');

      if (startsWithParen && endsWithParen) {
        chunk = chunk.slice(1, -1).trim();
      }

      if (/\s+OR\s+/i.test(chunk)) {
        const ors = chunk.split(/\s+OR\s+/i).map((w) => w.trim());
        porWords.push(...ors);
      } else {
        chunk = chunk.replace(/[()]/g, '').trim();
        if (chunk) {
          pandWords.push(chunk);
        }
      }
    });

    return {
      pandWords,
      porWords,
      pnotWords,
    };
  };

  useEffect(() => {
    if (initialQuery) {
      const { pandWords, porWords, pnotWords } = parseQueryString(initialQuery);
      setAndTerms(pandWords);
      setOrTerms(porWords);
      setNotTerms(pnotWords);
    }
  }, [initialQuery]);

  useEffect(() => {
    const query = generateQueryString(andTerms, orTerms, notTerms);
    setFinalQuery(query);
    setEditedQuery(query);
  }, [andTerms, orTerms, notTerms]);

  const handleApply = () => {
    const queryToApply = isEditing ? editedQuery : finalQuery;
    onApplyQuery(queryToApply);
    onClose();
  };

  const handleEditToggle = () => {
    if (isEditing) {
      setFinalQuery(editedQuery);
    }
    setIsEditing(!isEditing);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="border-primary-500 flex h-full w-[465px] flex-col border-r-1 bg-neutral-900">
        <div className="flex-1 overflow-y-auto p-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className="cursor-pointer text-stone-400 transition-colors hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex items-center gap-2">
              <span className="text-lg text-cyan-400">راهنما</span>
              <HelpCircle className="h-5 w-5 text-cyan-400" />
            </div>
          </div>

          <TagInput
            label="دقیقا شامل این کلمات باشد"
            value={andTerms}
            onChange={setAndTerms}
            placeholder="کلمه مورد نظر را بنویسید"
            className="mt-8"
          />

          <TagInput
            label="می‌تواند حداقل یکی از این کلمات را داشته باشد"
            value={orTerms}
            onChange={setOrTerms}
            placeholder="کلمه مورد نظر را بنویسید"
            className="mt-8"
          />

          <TagInput
            label="هیچ کدام از این کلمات نباشد"
            value={notTerms}
            onChange={setNotTerms}
            placeholder="کلمه مورد نظر را بنویسید"
            className="mt-8"
          />
        </div>

        <div className="p-4">
          <TextInput
            label="کوئری ایجاد شده"
            disabled={!isEditing}
            appendIcon={isEditing ? <CheckLine /> : <Edit3 />}
            onAppendClick={handleEditToggle}
            value={editedQuery}
            onChange={(e) => setEditedQuery(e.target.value)}
          />

          <Button
            variant="primary"
            className="mt-6 h-[48px] w-full text-lg"
            onClick={handleApply}
          >
            تایید
          </Button>
        </div>
      </div>
    </div>
  );
};

interface SearchDrawerInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const SearchDrawerInput: React.FC<SearchDrawerInputProps> = ({
  label,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleApplyQuery = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <TextInput
        label={label}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        appendIcon={<Sliders />}
        onAppendClick={() => setIsOpen(true)}
        {...props}
      />

      <QueryBuilder
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onApplyQuery={handleApplyQuery}
        initialQuery={searchQuery}
      />
    </div>
  );
};

export default SearchDrawerInput;
