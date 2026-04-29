import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export type LegalBlock =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] };

type Props = {
  title: string;
  effectiveDate?: string;
  intro?: string;
  blocks: LegalBlock[];
};

export default function LegalPage({
  title,
  effectiveDate,
  intro,
  blocks,
}: Props) {
  return (
    <main className="bg-white pt-24 pb-24">
      <div className="mx-auto max-w-3xl px-6">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex items-center gap-1 text-xs text-gray-500"
        >
          <Link href="/" className="hover:text-brand">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 text-gray-300" />
          <span className="text-gray-700 font-medium">{title}</span>
        </nav>

        {/* Header */}
        <header className="mb-10 border-b border-gray-200 pb-8">
          <div className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-navy-900 md:text-5xl">
            {title}
          </h1>
          {effectiveDate && (
            <p className="mt-3 text-sm text-gray-500">
              Effective {effectiveDate}
            </p>
          )}
          {intro && (
            <p className="mt-5 text-base leading-relaxed text-gray-700">
              {intro}
            </p>
          )}
        </header>

        {/* Body */}
        <article className="space-y-5 text-[15px] leading-relaxed text-gray-700">
          {blocks.map((block, i) => {
            if (block.type === 'h2') {
              return (
                <h2
                  key={i}
                  className="font-display text-2xl font-bold text-navy-900 mt-10 mb-2 tracking-tight"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'h3') {
              return (
                <h3
                  key={i}
                  className="font-display text-lg font-bold text-navy-900 mt-6 mb-1 tracking-tight"
                >
                  {block.text}
                </h3>
              );
            }
            if (block.type === 'ul') {
              return (
                <ul
                  key={i}
                  className="list-disc space-y-2 pl-6 marker:text-brand"
                >
                  {block.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              );
            }
            return <p key={i}>{block.text}</p>;
          })}
        </article>

        {/* Bottom note */}
        <div className="mt-16 border-t border-gray-200 pt-8 text-sm text-gray-500">
          Questions about this policy? Reach us at{' '}
          <a
            href="mailto:support@flyrlink.com"
            className="font-medium text-brand hover:underline"
          >
            support@flyrlink.com
          </a>
          .
        </div>
      </div>
    </main>
  );
}
