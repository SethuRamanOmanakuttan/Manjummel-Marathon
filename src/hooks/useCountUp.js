import { useEffect, useRef, useState } from 'react';

/**
 * Animates a numeric value counting up from 0 to `target` once the
 * returned ref scrolls into view. Reuses the same IntersectionObserver
 * pattern as useScrollReveal, but kept separate/local since it needs to
 * drive React state per-instance rather than toggle a shared CSS class.
 *
 * Pass the raw number to count to (e.g. 9000) plus an optional prefix/
 * suffix are handled by the caller when formatting — this hook only
 * returns the current numeric value.
 */
function prefersReducedMotion() {
  return typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function useCountUp(target, { duration = 1400 } = {}) {
  const ref = useRef(null);
  // Reduced-motion viewers get the final value immediately — derived at
  // init time rather than set from inside the effect below.
  const [value, setValue] = useState(() => (prefersReducedMotion() ? target : 0));

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    let rafId;
    const animate = () => {
      const start = performance.now();
      const from = 0;

      const tick = (now) => {
        const elapsed = now - start;
        const progress = Math.min(1, elapsed / duration);
        // ease-out cubic — quick start, gentle settle, matches the
        // cubic-bezier(0.16, 1, 0.3, 1) easing used across the rest of the site
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(from + (target - from) * eased));

        if (progress < 1) {
          rafId = requestAnimationFrame(tick);
        }
      };
      rafId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [target, duration]);

  return [ref, value];
}
