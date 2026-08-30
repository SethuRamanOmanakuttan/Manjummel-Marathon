export default function EventDate() {
  return (
    <section
      aria-label="Event date and location"
      style={{
        backgroundColor: '#071321',
        padding: '0 clamp(1.5rem, 5vw, 4rem)',
        paddingBottom: 'clamp(5rem, 12vw, 10rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ghost "02" watermark — purely decorative */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: 'clamp(-3rem, -4vw, -6rem)',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 0,
          userSelect: 'none',
          pointerEvents: 'none',
          fontSize: 'clamp(14rem, 38vw, 32rem)',
          fontWeight: 800,
          letterSpacing: '-0.06em',
          lineHeight: 0.85,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(245,241,232,0.05)',
        }}
      >
        02
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="divider" />

        <div
          className="reveal"
          style={{ paddingTop: 'clamp(3rem, 7vw, 6rem)' }}
        >
          <span
            className="label-sm"
            style={{ color: '#F26A21', display: 'block', marginBottom: '2.5rem' }}
          >
            MARK YOUR CALENDAR
          </span>

          {/* Date stack */}
          <div style={{ lineHeight: 0.88 }}>
            {/* "02" — full brightness */}
            <time
              dateTime="2026-10-02"
              className="font-display"
              style={{
                display: 'block',
                fontSize: 'clamp(5rem, 16vw, 14rem)',
                color: '#F5F1E8',
              }}
            >
              02
            </time>

            {/* "OCT" — visible mid tone */}
            <span
              className="font-display"
              style={{
                display: 'block',
                fontSize: 'clamp(5rem, 16vw, 14rem)',
                /* Outline style — consistent with hero */
                color: 'transparent',
                WebkitTextStroke: '2px rgba(245,241,232,0.45)',
              }}
            >
              OCT
            </span>

            {/* "2026" — quieter but readable */}
            <span
              className="font-display"
              style={{
                display: 'block',
                fontSize: 'clamp(5rem, 16vw, 14rem)',
                color: 'rgba(245,241,232,0.14)',
              }}
            >
              2026
            </span>
          </div>

          {/* Location row */}
          <div
            className="reveal"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.75rem',
              marginTop: 'clamp(2rem, 5vw, 4rem)',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '1px',
                background: '#F26A21',
                opacity: 0.6,
                flexShrink: 0,
              }}
            />
            <div>
              <p
                className="font-display"
                style={{
                  fontSize: 'clamp(1.4rem, 3.5vw, 2.75rem)',
                  color: '#F5F1E8',
                }}
              >
                MANJUMMEL
              </p>
              <p
                className="label-xs"
                style={{
                  color: 'rgba(245,241,232,0.32)',
                  marginTop: '0.4rem',
                  letterSpacing: '0.28em',
                }}
              >
                ELOOR · KERALA
              </p>
            </div>
          </div>
        </div>

        <div
          className="divider"
          style={{ marginTop: 'clamp(3rem, 7vw, 6rem)' }}
        />
      </div>
    </section>
  );
}
