"use client";

import React, { useEffect, useRef, useState } from "react";

type TypewriterProps = {
  texts: string[];            // strings to cycle through
  typingSpeed?: number;       // ms per character typed
  deletingSpeed?: number;     // ms per character deleted
  pause?: number;             // pause after a full string (ms)
  loop?: boolean;             // should loop
  className?: string;         // tailwind classes for text
  cursorClassName?: string;   // tailwind classes for cursor
  ariaLive?: "polite" | "assertive" | "off";
};

export default function Typewriter({
  texts,
  typingSpeed = 45,
  deletingSpeed = 30,
  pause = 1400,
  loop = true,
  className = "inline-block text-lg md:text-xl",
  cursorClassName = "inline-block ml-1",
  ariaLive = "polite",
}: TypewriterProps) {
  const [display, setDisplay] = useState<string>(texts?.[0] ?? "");
  const [index, setIndex] = useState(0); // which text in array
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Respect reduced-motion preference
  const reduceMotion =
    typeof window !== "undefined" &&
    // fallback to false if matchMedia isn't available
    !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  useEffect(() => {
    setMounted(true);
    return () => {
      // cleanup timers on unmount
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // If reduced motion is set, don't animate — just show the first text
    if (reduceMotion) {
      setDisplay(texts[0] ?? "");
      return;
    }

    const currentText = texts[index % texts.length] ?? "";
    if (!isDeleting) {
      // typing
      if (display.length < currentText.length) {
        timerRef.current = window.setTimeout(() => {
          setDisplay(current => current + currentText.charAt(display.length));
        }, typingSpeed);
      } else {
        // finished typing this string
        timerRef.current = window.setTimeout(() => {
          setIsDeleting(true);
        }, pause);
      }
    } else {
      // deleting
      if (display.length > 0) {
        timerRef.current = window.setTimeout(() => {
          setDisplay(current => current.slice(0, -1));
        }, deletingSpeed);
      } else {
        // finished deleting, move to next
        setIsDeleting(false);
        setIndex(prev => (prev + 1) % texts.length);
      }
    }

    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [display, isDeleting, index, mounted]);

  // If not looping and we've cycled through all texts once, stop at the last fully typed text.
  useEffect(() => {
    if (!loop && index > texts.length - 1) {
      setDisplay(texts[texts.length - 1] ?? "");
      setIsDeleting(false);
      if (timerRef.current) window.clearTimeout(timerRef.current);
    }
  }, [index, loop, texts]);

  // Cursor markup: a simple span that we style with CSS below (blinking)
  return (
    <span aria-live={ariaLive} className={className}>
      <span>{display}</span>
      <span className={cursorClassName} aria-hidden>
        <TypewriterCursor />
      </span>
      <span className="sr-only">{texts[0]}</span>
    </span>
  );
}

function TypewriterCursor() {
  // small inline SVG or simple block for cursor; CSS animation handles blinking
  return <span className="inline-block w-0.5 h-5 bg-green-900 align-middle animate-type-cursor" />;
}
