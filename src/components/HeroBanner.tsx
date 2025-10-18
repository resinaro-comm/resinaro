"use client";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  priority?: boolean;
};

export default function HeroBanner({ src, alt, title, subtitle, priority = true }: Props) {
  return (
    <section className="relative isolate w-full px-4 sm:px-6 lg:px-8">
      {/* offset for sticky navbar / ad banner */}
      <div className="pt-5 sm:pt-7 md:pt-10" />

      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
        {/* Image */}
        <div className="relative h-[38vw] min-h-[220px] max-h-[480px]">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 1400px"
          />
          {/* Vignette + top fade */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
          <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(120%_100%_at_50%_0%,#000_35%,transparent_70%)]" />
        </div>

        {/* Content overlay */}
        <div className="pointer-events-none absolute inset-0 flex items-center">
          <div className="pointer-events-auto mx-auto w-full px-5 sm:px-8">
            <div className="mx-auto max-w-3xl md:mx-0 md:max-w-xl md:pl-2 lg:pl-4">
              <div className="rounded-2xl bg-white/20 p-4 sm:p-5 backdrop-blur-sm ring-1 ring-white/30 md:bg-white/15 md:backdrop-blur-md md:ring-white/30 md:max-w-[48ch]">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
                  {title}
                </h1>

                {/* Tricolour accent */}
                <div className="mt-2 h-1 w-24 overflow-hidden rounded-full">
                  <div className="flex h-full">
                    <div className="flex-1 bg-green-600" />
                    <div className="flex-1 bg-white" />
                    <div className="flex-1 bg-red-600" />
                  </div>
                </div>

                {subtitle ? (
                  <p className="mt-3 text-base sm:text-lg md:text-xl text-white/95 drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]">
                    {subtitle}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* Subtle inner border glow */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/20" />
      </div>
    </section>
  );
}
