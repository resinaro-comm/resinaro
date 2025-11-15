"use client";

import { useEffect } from "react";

/**
 * Binds click handlers to the proof carousel buttons after hydration.
 * Avoids inline-script timing issues where listeners are lost during hydration.
 */
export default function CarouselBinder() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-carousel]");
    if (!root) return;
    const track = root.querySelector<HTMLElement>("[data-track]");
    if (!track) return;
    const slides = Array.from(track.children) as HTMLElement[];
    if (!slides.length) return;

    let current = 0;
    const goTo = (i: number) => {
      i = (i + slides.length) % slides.length;
      current = i;
      try {
        // Prefer smooth scroll if available
        type Scrollable = HTMLElement & { scrollTo?: (options: ScrollToOptions) => void };
        (track as Scrollable).scrollTo?.({ left: slides[i].offsetLeft, behavior: "smooth" });
      } catch {
        // Fallback
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

    return () => {
      prevBtns.forEach((b) => b.removeEventListener("click", onPrev));
      nextBtns.forEach((b) => b.removeEventListener("click", onNext));
      track.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
