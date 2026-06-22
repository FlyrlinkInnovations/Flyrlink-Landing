'use client';

import { useRef, useState } from 'react';
import { Play } from 'lucide-react';
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
    <section className="relative bg-white py-24 lg:py-28">
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
        className={`relative mx-auto flex max-w-[1200px] flex-col items-start gap-12 px-6 reveal lg:flex-row lg:items-center lg:gap-16 ${
          isVisible ? 'revealed' : ''
        }`}
      >
        {/* Left — text */}
        <div className="w-full lg:max-w-[340px] lg:flex-shrink-0">
          <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-[-1.5px] text-navy-900 lg:text-6xl">
            Flyrlink in 20 seconds.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#4A5565] lg:text-lg">
            Watch how clients find verified experts and book real 1:1 sessions,
            end to end.
          </p>
        </div>

        {/* Right — video card */}
        <div className="relative w-full lg:flex-1">
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-navy-950 shadow-2xl shadow-navy-900/20 ring-1 ring-black/5">
            <div className="relative aspect-video w-full">
              <video
                ref={videoRef}
                src={VIDEO_SRC}
                preload="metadata"
                playsInline
                controls={hasStarted}
                className="absolute inset-0 h-full w-full object-cover"
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
