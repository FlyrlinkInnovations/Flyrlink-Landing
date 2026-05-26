'use client';

import { useRef, useState } from 'react';
import { Play, Sparkles } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const VIDEO_SRC =
  'https://leorix-dev.s3.us-east-2.amazonaws.com/static+files/Flyrlink+Promo+Video+(1).mp4';

export default function DemoVideo() {
  const { ref, isVisible } = useScrollReveal();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    setHasStarted(true);
    video.play().catch(() => {
      setHasStarted(false);
    });
  };

  return (
    <section className="relative bg-white py-24 md:py-28">
      {/* subtle dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgb(15 23 42 / 0.08) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />

      <div
        ref={ref}
        className={`relative mx-auto max-w-6xl px-6 reveal ${
          isVisible ? 'revealed' : ''
        }`}
      >
        {/* Header */}
        <div className="mb-10 text-center md:mb-14">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-[11px] font-semibold tracking-[0.24em] text-brand">
            <Sparkles className="h-3 w-3" />
            SEE IT IN ACTION
          </div>
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-navy-900 md:text-5xl lg:text-6xl">
            Flyrlink in{' '}
            <span className="font-serif italic font-medium text-brand">
              20 seconds.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-gray-600 md:text-lg">
            Watch how clients find verified experts and book real 1:1 sessions,
            end to end.
          </p>
        </div>

        {/* Video card */}
        <div className="relative mx-auto max-w-5xl">
          {/* glow */}
          <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand/25 via-brand-300/15 to-transparent blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-navy-950 shadow-2xl shadow-navy-900/20 ring-1 ring-black/5">
            <div className="relative aspect-video w-full">
              <video
                ref={videoRef}
                src={VIDEO_SRC}
                preload="metadata"
                playsInline
                controls={hasStarted}
                className="absolute inset-0 h-full w-full object-cover"
                onPause={() => {
                  // keep controls visible once started
                }}
              />

              {!hasStarted && (
                <button
                  type="button"
                  onClick={handlePlay}
                  aria-label="Play Flyrlink promo video"
                  className="group absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy-950/40 via-navy-950/30 to-navy-950/60 transition-all hover:from-navy-950/30 hover:to-navy-950/55"
                >
                  <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white/95 shadow-2xl shadow-brand/40 ring-4 ring-white/30 transition-transform duration-300 group-hover:scale-110 md:h-24 md:w-24">
                    <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-white/40" />
                    <Play
                      className="h-7 w-7 translate-x-0.5 fill-brand text-brand md:h-9 md:w-9"
                      strokeWidth={1.5}
                    />
                  </span>

                  <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur md:bottom-6 md:left-6">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-300 animate-pulse" />
                    Product demo · ~20s
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
