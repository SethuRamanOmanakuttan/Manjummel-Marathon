import { useState, useEffect } from 'react';

const REGISTER_URL = '#register';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'navbar-scrolled' : 'bg-transparent'
      }`}
      style={{ height: 'clamp(64px, 10vw, 78px)' }}
    >
      <nav
        aria-label="Main navigation"
        className="navbar-inner h-full flex items-center justify-between"
        style={{ padding: '0 clamp(1.25rem, 5vw, 4rem)', gap: '1rem' }}
      >
        {/* Wordmark */}
        <a
          href="/"
          aria-label="NSS Manjummel Marathon, Home"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(0.35rem, 1.5vw, 0.75rem)',
            minWidth: 0,
          }}
        >
          <img
            src="/nss.png"
            alt="NSS"
            style={{ height: 'clamp(32px, 6vw, 42px)', width: 'auto', flexShrink: 0 }}
          />
          <span
            aria-hidden="true"
            style={{
              color: 'rgba(245,241,232,0.15)',
              fontSize: '0.6rem',
              flexShrink: 0,
            }}
          >
            |
          </span>
          <span
            className="label-sm"
            style={{
              color: 'rgba(245,241,232,0.75)',
              letterSpacing: 'clamp(0em, 0.35vw, 0.14em)',
              lineHeight: 1,
              fontSize: 'clamp(0.56rem, 1.8vw, 0.85rem)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              minWidth: 0,
            }}
          >
            MANJUMMEL MARATHON
          </span>
        </a>

        {/* Center season label, desktop only */}
        <div
          className="hidden md:flex items-center gap-3"
          aria-hidden="true"
          style={{ flexShrink: 0 }}
        >
          <span
            style={{
              display: 'block',
              width: '20px',
              height: '1px',
              backgroundColor: 'rgba(245,241,232,0.12)',
            }}
          />
          <span
            className="label-sm"
            style={{ color: 'rgba(245,241,232,0.35)', fontSize: '0.8rem' }}
          >
            SEASON 04
          </span>
          <span
            style={{
              display: 'block',
              width: '20px',
              height: '1px',
              backgroundColor: 'rgba(245,241,232,0.12)',
            }}
          />
        </div>

        {/* Register CTA */}
        <a
          href={REGISTER_URL}
          className="btn-nav"
          id="nav-register-btn"
          aria-label="Register for the marathon"
          style={{ flexShrink: 0, fontSize: 'clamp(0.68rem, 1.9vw, 0.8rem)' }}
        >
          REGISTER
          <span className="btn-arrow" aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
