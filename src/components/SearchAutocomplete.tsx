'use client';

import {
  useState,
  useEffect,
  useMemo,
  useRef,
  FormEvent,
  KeyboardEvent,
} from 'react';
import { useRouter } from 'next/navigation';
import { Search, ArrowRight, FolderOpen, Sparkles } from 'lucide-react';
import { searchAll, type SearchHit } from '@/config/services';

type Variant = 'light' | 'dark';

type Props = {
  variant?: Variant;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  size?: 'sm' | 'md' | 'lg';
  onSubmitFallback?: (query: string) => void;
  showCategoryDropdown?: boolean;
};

function buildAppFallback(q: string) {
  const url = new URL('https://app.flyrlink.com/');
  if (q.trim()) url.searchParams.set('q', q.trim());
  return url.toString();
}

export default function SearchAutocomplete({
  variant = 'light',
  placeholder = 'What service are you looking for?',
  className = '',
  inputClassName = '',
  size = 'md',
}: Props) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const hits: SearchHit[] = useMemo(() => searchAll(query, 7), [query]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  function go(hit: SearchHit) {
    setOpen(false);
    setQuery('');
    if (hit.type === 'category') {
      router.push(`/categories/${hit.slug}`);
    } else {
      router.push(`/services/${hit.slug}`);
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (hits.length > 0) {
      go(hits[activeIndex] ?? hits[0]);
    } else if (query.trim()) {
      window.location.href = buildAppFallback(query);
    }
  }

  function handleKey(e: KeyboardEvent<HTMLInputElement>) {
    if (!open || hits.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, hits.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Escape') {
      setOpen(false);
      inputRef.current?.blur();
    }
  }

  const dark = variant === 'dark';
  const showResults = open && query.trim().length > 0;

  const sizeClass =
    size === 'sm'
      ? 'py-2 text-sm pl-10 pr-4'
      : size === 'lg'
        ? 'py-3.5 text-base pl-11 pr-4'
        : 'py-2.5 text-sm pl-10 pr-4';

  const iconLeft = size === 'lg' ? 'left-4' : 'left-3.5';

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <form onSubmit={handleSubmit} role="search" aria-label="Search">
        <div className="relative">
          <Search
            className={`pointer-events-none absolute ${iconLeft} top-1/2 -translate-y-1/2 h-4 w-4 ${
              dark ? 'text-gray-400' : 'text-gray-400'
            }`}
          />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={handleKey}
            placeholder={placeholder}
            aria-label={placeholder}
            aria-autocomplete="list"
            aria-expanded={showResults}
            autoComplete="off"
            className={`w-full rounded-full border focus:outline-none focus:ring-2 transition-all ${sizeClass} ${
              dark
                ? 'border-white/10 bg-white text-navy-900 placeholder:text-gray-400 focus:border-brand/40 focus:ring-brand/20'
                : 'border-gray-200 bg-gray-50 text-navy-900 placeholder:text-gray-400 focus:bg-white focus:border-brand/40 focus:ring-brand/20'
            } ${inputClassName}`}
          />
        </div>
      </form>

      {/* Dropdown */}
      {showResults && (
        <div
          className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-navy-950/15"
          role="listbox"
        >
          {hits.length === 0 ? (
            <div className="px-4 py-5 text-sm text-gray-500">
              No matches for{' '}
              <span className="font-semibold text-navy-900">
                &ldquo;{query}&rdquo;
              </span>
              . Press enter to search the app.
            </div>
          ) : (
            <ul className="max-h-[420px] overflow-y-auto py-1">
              {hits.map((hit, i) => {
                const Icon = hit.type === 'category' ? FolderOpen : Sparkles;
                const active = i === activeIndex;
                return (
                  <li key={`${hit.type}-${hit.slug}`} role="option" aria-selected={active}>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveIndex(i)}
                      onClick={() => go(hit)}
                      className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                        active ? 'bg-brand/5' : 'bg-white hover:bg-gray-50'
                      }`}
                    >
                      <span
                        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg ${
                          hit.type === 'category'
                            ? 'bg-brand/10 text-brand'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-navy-900">
                          {hit.name}
                        </p>
                        <p className="truncate text-xs text-gray-500">
                          {hit.type === 'category' ? 'Category' : hit.subtitle}
                        </p>
                      </div>
                      {hit.type === 'service' && (
                        <span className="hidden sm:inline text-xs text-gray-500 mr-2">
                          From <span className="font-semibold text-navy-900">₹{hit.price}</span>
                        </span>
                      )}
                      <ArrowRight className="h-3.5 w-3.5 text-gray-300 flex-shrink-0" />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
