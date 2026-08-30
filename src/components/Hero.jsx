import { useEffect, useRef } from 'react';
import useMagnetic from '../hooks/useMagnetic';
import useBackgroundCycle from '../hooks/useBackgroundCycle';
import addToCalendar from '../utils/addToCalendar';
import { useRegisterModal } from '../context/RegisterModalContext';

const HERO_IMAGES = ['/bg.webp', '/bg2.webp', '/bg3.webp'];

export default function Hero() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const ctaRef = useMagnetic(0.25);
  const activeImage = useBackgroundCycle(HERO_IMAGES, 3500);
  const openRegisterModal = useRegisterModal();

  // Subtle parallax on scroll — background drifts at one rate, the
  // headline/content layer drifts a few px slower, so the two read as
  // slightly separated depth planes rather than one flat image.
  useEffect(() => {
    const el = heroRef.current;
    const content = contentRef.current;
    if (!el) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const onScroll = () => {
      const rate = window.scrollY * 0.25;
      el.style.setProperty('--hero-bg-shift', `${rate}px`);
      if (content) {
        const shift = Math.min(window.scrollY * 0.06, 18);
        content.style.setProperty('--hero-shift', `${shift}px`);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      aria-label="NSS Manjummel Marathon, Season 04"
      ref={heroRef}
      className="anim-bg"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 'clamp(6rem, 12vh, 9rem)',
        paddingBottom: 'clamp(3rem, 8vh, 5rem)',
        overflow: 'hidden',
      }}
    >
      {/* Crossfading background layers — same scene, runners a step further
          along each frame, so the cycle reads as gentle motion rather than
          a slideshow cut. */}
      {HERO_IMAGES.map((src, i) => (
        <div
          key={src}
          aria-hidden="true"
          className="hero-bg-layer"
          style={{
            backgroundImage: `url('${src}')`,
            opacity: i === activeImage ? 1 : 0,
          }}
        />
      ))}

      {/* Single composited scrim — top readability, bottom-left legibility
          and a soft left-to-right vignette, all in one layer so the
          artwork underneath stays as clean as possible. */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: `
            linear-gradient(180deg, rgba(3,10,18,0.8) 0%, rgba(3,10,18,0.42) 16%, transparent 32%),
            linear-gradient(0deg, rgba(7,19,33,0.96) 0%, rgba(7,19,33,0.68) 26%, rgba(7,19,33,0.22) 50%, transparent 70%),
            linear-gradient(100deg, rgba(7,19,33,0.5) 0%, transparent 48%)
          `,
        }}
      />

      {/* Corner frame marks — race-bib / stopwatch energy */}
      <div aria-hidden="true" className="hero-frame hero-frame-tl" />
      <div aria-hidden="true" className="hero-frame hero-frame-br" />

      {/* Content */}
      <div
        ref={contentRef}
        className="hero-parallax-layer"
        style={{
          position: 'relative',
          zIndex: 2,
          padding: 'clamp(1.5rem, 5vw, 4rem)',
          maxWidth: '1400px',
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          textAlign: 'left',
        }}
      >
        {/* Eyebrow */}
        <p
          className="anim-meta hero-kicker"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6em',
            color: 'rgba(245,241,232,0.75)',
            letterSpacing: 'clamp(0.05em, 1vw, 0.22em)',
            fontSize: 'clamp(0.7rem, 1.6vw, 1.05rem)',
            fontWeight: 700,
            textTransform: 'uppercase',
            margin: 0,
            marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
          }}
        >
          <span aria-hidden="true" className="hero-eyebrow-dot" />
          SEASON 04 &nbsp;·&nbsp; FOR A{' '}
          <span className="hero-pulse">DRUG-FREE KERALA</span>
        </p>

        {/* Main Headline */}
        <h1
          aria-label="NSS Manjummel Marathon"
          className="anim-headline"
          style={{
            margin: 0,
            padding: 0,
          }}
        >
          {/* Line 1: NSS — white, aligned with the display type below via a running rule */}
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85em',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '-0.01em',
              lineHeight: 1,
              color: '#F5F1E8',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              marginBottom: '0.15em',
            }}
          >
            NSS
            <span className="hero-rule" aria-hidden="true" />
          </span>

          {/* Line 2: MANJUMMEL — solid, massive */}
          <span
            style={{
              display: 'block',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '-0.03em',
              lineHeight: 0.88,
              color: '#F5F1E8',
              fontSize: 'clamp(2.5rem, 13vw, 13rem)',
            }}
          >
            MANJUMMEL
          </span>

          {/* Line 3: MARATHON, fluid outline that stays crisp at any size */}
          <span
            className="text-outline"
            style={{
              display: 'block',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '-0.03em',
              lineHeight: 0.88,
              fontSize: 'clamp(2.5rem, 13vw, 13rem)',
            }}
          >
            MARATHON
          </span>
        </h1>

        {/* Date + CTA — one quiet action block */}
        <div
          className="anim-cta"
          style={{
            marginTop: 'clamp(2.25rem, 5vw, 3.5rem)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 'clamp(1.25rem, 3vw, 2rem)',
          }}
        >
          <button
            ref={ctaRef}
            type="button"
            onClick={openRegisterModal}
            id="hero-register-btn"
            className="btn-primary btn-magnetic hero-cta-glow"
            aria-label="Register for NSS Manjummel Marathon"
          >
            REGISTER NOW
            <span className="btn-arrow" aria-hidden="true">→</span>
          </button>

          <div className="hero-date" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
            <time
              dateTime="2026-10-02"
              style={{
                color: 'rgba(245,241,232,0.85)',
                fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
              }}
            >
              FRI, 02 OCT 2026
            </time>

            <button
              type="button"
              onClick={addToCalendar}
              className="hero-calendar-btn"
              aria-label="Add NSS Manjummel Marathon race day to your calendar"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="5" width="18" height="16" rx="1.5" stroke="currentColor" strokeWidth="2" />
                <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                <path d="M8 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M16 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        className="scroll-indicator"
        style={{
          position: 'absolute',
          bottom: 'clamp(1.75rem, 3.5vw, 2.75rem)',
          right: 'clamp(1.5rem, 5vw, 4rem)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.6rem',
          opacity: 0.4,
        }}
      >
        <span
          className="label-xs"
          style={{
            writingMode: 'vertical-rl',
            letterSpacing: '0.28em',
            color: 'rgba(245,241,232,0.7)',
            fontWeight: 600,
          }}
        >
          SCROLL
        </span>
        <span className="hero-scroll-line" aria-hidden="true" />
      </div>
    </section>
  );
}
