"use client";

import { useEffect } from "react";

/**
 * Binds click handlers to the proof carousel buttons after hydration.
 * Avoids inline-script timing issues where listeners are lost during hydration.
 */
export default function CarouselBinder() {
  useEffect(() => {
    const roots = Array.from(document.querySelectorAll<HTMLElement>("[data-carousel]"));
    if (!roots.length) return;

    const cleanups: Array<() => void> = [];

    roots.forEach((root) => {
      const track = root.querySelector<HTMLElement>("[data-track]");
      if (!track) return;
      const slides = Array.from(track.children) as HTMLElement[];
      if (!slides.length) return;

      let current = 0;
      const goTo = (i: number) => {
        i = (i + slides.length) % slides.length;
        current = i;
        try {
          type Scrollable = HTMLElement & { scrollTo?: (options: ScrollToOptions) => void };
          (track as Scrollable).scrollTo?.({ left: slides[i].offsetLeft, behavior: "smooth" });
        } catch {
          track.scrollLeft = slides[i].offsetLeft;
        }
      };

      const onPrev = (e: Event) => {
        e.preventDefault();
        goTo(current - 1);
      };
      const onNext = (e: Event) => {
        e.preventDefault();
        goTo(current + 1);
      };

      const prevBtns = Array.from(root.querySelectorAll<HTMLElement>("[data-prev]"));
      const nextBtns = Array.from(root.querySelectorAll<HTMLElement>("[data-next]"));
      prevBtns.forEach((b) => b.addEventListener("click", onPrev));
      nextBtns.forEach((b) => b.addEventListener("click", onNext));

      const onScroll: EventListener = () => {
        const left = track.scrollLeft;
        const w = track.clientWidth;
        let idx = 0;
        slides.forEach((s, i) => {
          if (Math.abs(s.offsetLeft - left) < w / 2) idx = i;
        });
        current = idx;
      };
      track.addEventListener("scroll", onScroll, { passive: true });

      cleanups.push(() => {
        prevBtns.forEach((b) => b.removeEventListener("click", onPrev));
        nextBtns.forEach((b) => b.removeEventListener("click", onNext));
        track.removeEventListener("scroll", onScroll);
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);
  return null;
}
