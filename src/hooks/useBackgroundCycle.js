import { useEffect, useState } from 'react';

/**
 * Cycles through a list of image URLs, crossfading between them on an
 * interval. Returns the current and previous index so the caller can
 * render two stacked layers and animate opacity between them.
 * Pauses entirely under prefers-reduced-motion (stays on the first image).
 */
export default function useBackgroundCycle(images, intervalMs = 6000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  return index;
}
