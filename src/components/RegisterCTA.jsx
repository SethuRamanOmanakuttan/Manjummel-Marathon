import useMagnetic from '../hooks/useMagnetic';
import Countdown from './Countdown';

export default function RegisterCTA() {
  const ctaRef = useMagnetic(0.25);

  return (
    <section
      id="register"
      aria-labelledby="cta-heading"
      style={{
        /* Slightly lighter navy to create section distinction */
        backgroundColor: '#0a1929',
        padding: 'clamp(5rem, 14vw, 11rem) clamp(1.5rem, 5vw, 4rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Orange accent top line */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background:
            'linear-gradient(90deg, #F26A21 0%, transparent 60%)',
          opacity: 0.5,
        }}
      />

      {/* Large ghost text */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '-2vw',
          bottom: '-4vw',
          fontSize: 'clamp(8rem, 24vw, 22rem)',
          fontWeight: 800,
          letterSpacing: '-0.06em',
          lineHeight: 0.85,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(245,241,232,0.04)',
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        RUN
      </div>

      <div
        style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}
      >
        <div className="reveal">
          {/* Eyebrow */}
          <p
            className="label-sm"
            style={{ color: '#F26A21', marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)' }}
          >
            READY TO RUN?
          </p>

          {/* Main heading */}
          <h2
            id="cta-heading"
            className="font-display"
            style={{
              fontSize: 'clamp(3rem, 9.5vw, 8.5rem)',
              color: '#F5F1E8',
              marginBottom: '0',
              lineHeight: 0.9,
            }}
          >
            NSS MANJUMMEL
            <br />
            <span
              style={{
                color: 'transparent',
                WebkitTextStroke: '2px rgba(245,241,232,0.65)',
              }}
            >
              MARATHON
            </span>
            <span style={{ color: '#F26A21', WebkitTextStroke: '0', WebkitTextFillColor: '#F26A21' }}>.</span>
          </h2>

          {/* Meta strip */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0',
              alignItems: 'center',
              marginTop: 'clamp(1.5rem, 3vw, 2.5rem)',
              marginBottom: 'clamp(2.5rem, 6vw, 5rem)',
              borderTop: '1px solid rgba(245,241,232,0.07)',
              borderBottom: '1px solid rgba(245,241,232,0.07)',
              padding: '1rem 0',
            }}
          >
            {[
              { label: 'SEASON', val: '04' },
              { label: 'DATE', val: '02 OCT 2026' },
              { label: 'LOCATION', val: 'MANJUMMEL, KERALA' },
            ].map((item, i) => (
              <div
                key={item.label}
                style={{
                  flex: '0 0 auto',
                  paddingRight: '2.5rem',
                  marginRight: i < 2 ? '2.5rem' : 0,
                  borderRight: i < 2 ? '1px solid rgba(245,241,232,0.07)' : 'none',
                }}
              >
                <p
                  className="label-xs"
                  style={{ color: 'rgba(245,241,232,0.28)', marginBottom: '0.3rem' }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'rgba(245,241,232,0.7)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {item.val}
                </p>
              </div>
            ))}
          </div>

          {/* Countdown */}
          <div style={{ marginBottom: 'clamp(2rem, 5vw, 3rem)' }}>
            <Countdown />
          </div>

          {/* CTA + distance tags */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(1.5rem, 4vw, 3rem)',
              flexWrap: 'wrap',
            }}
          >
            <a
              ref={ctaRef}
              href="#"
              id="cta-register-btn"
              className="btn-primary btn-magnetic"
              role="button"
              aria-label="Register for NSS Manjummel Marathon Season 04"
            >
              REGISTER NOW
              <span className="btn-arrow" aria-hidden="true">→</span>
            </a>

            <div
              style={{
                display: 'flex',
                gap: '1.75rem',
                flexWrap: 'wrap',
              }}
            >
              {['21 KM', '10 KM', '05 KM'].map((d) => (
                <span
                  key={d}
                  className="label-xs"
                  style={{ color: 'rgba(245,241,232,0.22)' }}
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
