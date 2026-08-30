import useMagnetic from '../hooks/useMagnetic';
import Countdown from './Countdown';
import StaggerWords from './StaggerWords';
import { useRegisterModal } from '../context/RegisterModalContext';

export default function RegisterCTA() {
  const ctaRef = useMagnetic(0.25);
  const openRegisterModal = useRegisterModal();

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
              fontSize: 'clamp(2.5rem, 9.5vw, 8.5rem)',
              color: '#F5F1E8',
              marginBottom: '0',
              lineHeight: 0.9,
            }}
          >
            <StaggerWords text="NSS MANJUMMEL" />
            <br />
            <span
              className="text-outline"
              style={{ WebkitTextStrokeColor: 'rgba(245,241,232,0.65)' }}
            >
              <StaggerWords text="MARATHON" startIndex={2} />
            </span>
            <span style={{ color: '#F26A21', WebkitTextStroke: '0', WebkitTextFillColor: '#F26A21' }}>.</span>
          </h2>

          {/* Meta strip — SEASON / DATE side by side, LOCATION stranding
              alone on its own row was an accidental flex-wrap artifact
              (two items fit, the third drops with empty space beside
              it). .cta-meta-strip below 560px becomes a deliberate
              2-column grid instead, with LOCATION spanning both
              columns on its own row. */}
          <div
            className="cta-meta-strip"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              rowGap: '1.25rem',
              columnGap: 'clamp(1.25rem, 4vw, 2.5rem)',
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
            ].map((item, i, arr) => (
              <div
                key={item.label}
                className="stat-block cta-meta-item"
                style={{
                  flex: '0 0 auto',
                  paddingRight: i < arr.length - 1 ? 'clamp(1.25rem, 4vw, 2.5rem)' : 0,
                  borderRight: i < arr.length - 1 ? '1px solid rgba(245,241,232,0.07)' : 'none',
                }}
              >
                <p
                  className="label-xs"
                  style={{ color: 'rgba(245,241,232,0.28)', marginBottom: '0.3rem' }}
                >
                  {item.label}
                </p>
                <p
                  className="stat-block-value"
                  style={{
                    fontSize: 'clamp(0.78rem, 1.6vw, 0.85rem)',
                    fontWeight: 600,
                    color: 'rgba(245,241,232,0.7)',
                    letterSpacing: '0.05em',
                    whiteSpace: 'nowrap',
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
            <button
              ref={ctaRef}
              type="button"
              onClick={openRegisterModal}
              id="cta-register-btn"
              className="btn-primary btn-magnetic"
              aria-label="Register for NSS Manjummel Marathon Season 04"
            >
              REGISTER NOW
              <span className="btn-arrow" aria-hidden="true">→</span>
            </button>

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
