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
      {/* offset for sticky navbar - improved responsive padding */}
      <div className="pt-6 sm:pt-8 md:pt-12" />
      <div className="relative mx-auto max-w-[1400px] rounded-lg sm:rounded-xl overflow-hidden shadow-md">
        <div className="aspect-[3/1] sm:aspect-[3.5/1]">
          <Image
            src={src}
            alt={alt}
            width={3840}
            height={1280}
            priority={priority}
            className="w-full h-full object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 1400px"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 pointer-events-none" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-10 py-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-3 sm:mt-4 max-w-3xl text-base sm:text-lg md:text-xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
