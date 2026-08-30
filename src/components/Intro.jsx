export default function Intro() {
  return (
    <section
      aria-labelledby="intro-heading"
      style={{
        backgroundColor: '#071321',
        padding: 'clamp(5rem, 12vw, 10rem) clamp(1.5rem, 5vw, 4rem)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div className="divider" />

        {/* Desktop: left headline / right paragraph */}
        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            columnGap: '2rem',
            paddingTop: 'clamp(3rem, 7vw, 6rem)',
            alignItems: 'end',
          }}
        >
          {/* Headline — 7 cols on desktop */}
          <div
            style={{
              gridColumn: 'span 12',
            }}
          >
            <p
              className="label-sm"
              style={{ color: '#F26A21', marginBottom: '2rem' }}
            >
              THE RUN
            </p>

            <h2
              id="intro-heading"
              className="font-display"
              style={{
                fontSize: 'clamp(3.2rem, 9vw, 8rem)',
                color: '#F5F1E8',
                lineHeight: 0.92,
              }}
            >
              RUN THROUGH
              <br />
              <span
                style={{
                  WebkitTextStroke: '1.5px rgba(245,241,232,0.35)',
                  color: 'transparent',
                }}
              >
                MANJUMMEL.
              </span>
            </h2>
          </div>
        </div>

        {/* Supporting text — right-pulled on desktop */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: 'clamp(2.5rem, 5vw, 4rem)',
          }}
        >
          <div style={{ maxWidth: '44ch' }}>
            <p
              style={{
                color: 'rgba(245,241,232,0.55)',
                fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
                lineHeight: 1.8,
                fontWeight: 400,
              }}
            >
              A community run through the streets, waterfronts and stories
              of Manjummel, Kerala. Four seasons of spirit, sweat and the
              simple joy of running together.
            </p>

            {/* Stat-like detail row */}
            <div
              style={{
                display: 'flex',
                gap: '2.5rem',
                marginTop: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(245,241,232,0.08)',
              }}
            >
              {[
                { val: '4TH', label: 'Season' },
                { val: '3', label: 'Distances' },
                { val: 'OCT 2', label: '2026' },
              ].map((item) => (
                <div key={item.label}>
                  <p
                    style={{
                      fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                      fontWeight: 800,
                      color: '#F5F1E8',
                      letterSpacing: '-0.02em',
                      lineHeight: 1,
                    }}
                  >
                    {item.val}
                  </p>
                  <p
                    className="label-xs"
                    style={{
                      color: 'rgba(245,241,232,0.3)',
                      marginTop: '0.4rem',
                    }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="divider" style={{ marginTop: 'clamp(3rem, 7vw, 6rem)' }} />
      </div>
    </section>
  );
}
