import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#1466C0]">
      {/* banner artwork */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/landing/HorizontalBorder.png")' }}
      />
      {/* depth gradient so the headline + buttons pop on the right */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-[#0C2738]/60 via-[#0C2738]/15 to-transparent" />

      {/* headline + buttons overlaid on the right */}
      <div className="relative mx-auto flex min-h-[200px] max-w-[1380px] items-center justify-end px-6 py-8 lg:min-h-[230px] lg:px-[60px]">
        <div className="flex flex-col items-end gap-5 text-right">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
              Ready when you are
            </p>
            <h2 className="mt-1.5 font-heading text-2xl font-bold leading-tight tracking-[-0.5px] text-white lg:text-[32px]">
              Find your expert today
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-3">
            <a
              href="https://app.flyrlink.com/"
              className="group inline-flex items-center gap-2 rounded-full bg-white py-2.5 pl-6 pr-2.5 text-sm font-semibold text-[#0C2738] shadow-lg shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/25"
            >
              Get Started Free
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0C2738] text-white transition-transform duration-200 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
            <Link
              href="/book-call"
              className="group inline-flex items-center gap-2 rounded-full bg-[#0C2738]/90 px-6 py-2.5 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0C2738] hover:ring-white/40"
            >
              Book a call
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
