import { useEffect, useRef } from 'react';
import useMagnetic from '../hooks/useMagnetic';

export default function Hero() {
  const heroRef = useRef(null);
  const ctaRef = useMagnetic(0.25);

  // Subtle parallax on scroll
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const onScroll = () => {
      const rate = window.scrollY * 0.25;
      el.style.backgroundPositionY = `calc(center + ${rate}px)`;
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
        backgroundImage: "url('/bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 'clamp(6rem, 12vh, 9rem)',
        paddingBottom: 'clamp(3rem, 8vh, 5rem)',
        overflow: 'hidden',
      }}
    >
      {/* Top scrim — keeps navbar text readable over the bright sky, always on */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 'clamp(110px, 14vw, 180px)',
          background:
            'linear-gradient(to bottom, rgba(3,10,18,0.85) 0%, rgba(3,10,18,0.5) 45%, transparent 100%)',
          zIndex: 1,
        }}
      />

      {/* Bottom gradient — strong enough for text, soft enough to keep the artwork */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(7,19,33,0.95) 0%, rgba(7,19,33,0.65) 28%, rgba(7,19,33,0.2) 52%, transparent 72%)',
          zIndex: 1,
        }}
      />

      {/* Left vignette for text side */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(105deg, rgba(7,19,33,0.55) 0%, transparent 50%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
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
          className="anim-meta hero-kicker label-xs"
          style={{
            color: 'rgba(245,241,232,0.5)',
            letterSpacing: '0.24em',
            marginBottom: 'clamp(1rem, 2.5vw, 1.5rem)',
          }}
        >
          SEASON 04 &nbsp;·&nbsp; FOR A{' '}
          <span className="hero-pulse">DRUG-FREE KERALA</span>
        </p>

        {/* Main Headline */}
        <h1
          aria-label="NSS Manjummel Marathon"
          className="anim-headline"
          style={{ margin: 0, padding: 0, marginTop: 'clamp(0.75rem, 2vw, 1.25rem)' }}
        >
          {/* Line 1: NSS — small accent */}
          <span
            style={{
              display: 'block',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              lineHeight: 1,
              color: '#F5F1E8',
              fontSize: 'clamp(1.5rem, 3vw, 3.25rem)',
              marginBottom: '0.2em',
              marginLeft: '.25em',
            }}
          >
            NSS
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
              fontSize: 'clamp(4rem, 15vw, 13rem)',
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
              fontSize: 'clamp(4rem, 15vw, 13rem)',
            }}
          >
            MARATHON
          </span>
        </h1>

        {/* Date + CTA — one quiet action block */}
        <div
          className="anim-cta"
          style={{
            marginTop: 'clamp(2rem, 5vw, 3.25rem)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 'clamp(0.85rem, 2vw, 1.1rem)',
          }}
        >
          <time
            dateTime="2026-10-02"
            className="label-sm"
            style={{ color: 'rgba(245,241,232,0.4)' }}
          >
            02 OCT 2026 &nbsp;·&nbsp; MANJUMMEL, KERALA
          </time>

          <a
            ref={ctaRef}
            href="#register"
            id="hero-register-btn"
            className="btn-primary btn-magnetic hero-cta-glow"
            role="button"
            aria-label="Register for NSS Manjummel Marathon"
          >
            REGISTER NOW
            <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
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
          gap: '0.5rem',
          opacity: 0.3,
        }}
      >
        <span
          className="label-xs"
          style={{
            writingMode: 'vertical-rl',
            letterSpacing: '0.22em',
            color: '#F5F1E8',
          }}
        >
          SCROLL
        </span>
        <span style={{ color: '#F5F1E8', fontSize: '0.7rem' }}>↓</span>
      </div>
    </section>
  );
}
