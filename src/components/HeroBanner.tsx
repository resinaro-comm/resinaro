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
    <section className="relative isolate w-full">
  {/* offset for sticky navbar - reduced padding */}
  <div className="pt-8 md:pt-12" />
      <div className="relative mx-auto max-w-[1400px] rounded-xl overflow-hidden shadow-sm">
        <Image
          src={src}
          alt={alt}
          width={3840}
          height={1280}
          priority={priority}
          className="h-[42vw] min-h-[300px] max-h-[560px] w-full object-cover"
          sizes="(max-width: 768px) 100vw, 1400px"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none" />
        <div className="absolute inset-x-0 flex flex-col items-center text-center px-6 sm:px-10" style={{ top: '20%' }}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-2 max-w-3xl text-base sm:text-lg text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
