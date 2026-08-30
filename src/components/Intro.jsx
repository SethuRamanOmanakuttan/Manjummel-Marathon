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
                className="text-outline"
                style={{ WebkitTextStrokeColor: 'rgba(245,241,232,0.35)' }}
              >
                MANJUMMEL.
              </span>
            </h2>
          </div>
        </div>

        {/* Supporting text — right-pulled on desktop, route illustration fills the left */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'clamp(2rem, 5vw, 4rem)',
            marginTop: 'clamp(2.5rem, 5vw, 4rem)',
          }}
        >
          {/* Route line art — start flag, winding course, checkpoints, finish */}
          <svg
            aria-hidden="true"
            className="intro-route"
            viewBox="0 0 820 320"
            fill="none"
            style={{ flex: '1 1 auto', minWidth: 0, maxWidth: '860px', height: 'auto' }}
          >
            <path
              className="intro-route-path"
              d="M30 60
                 C 110 60, 120 150, 190 160
                 S 270 110, 300 175
                 S 210 265, 275 285
                 S 420 270, 400 195
                 S 320 95, 410 75
                 S 480 40, 550 90
                 S 600 200, 670 190
                 S 740 100, 790 60"
              stroke="rgba(245,241,232,0.3)"
              strokeWidth="2"
              strokeDasharray="1 11"
              strokeLinecap="round"
            />

            {/* Checkpoint markers along the route */}
            <circle cx="190" cy="160" r="4" fill="none" stroke="#F5F1E8" strokeWidth="1.5" opacity="0.45" />
            <circle cx="275" cy="285" r="4" fill="none" stroke="#F5F1E8" strokeWidth="1.5" opacity="0.45" />
            <circle cx="410" cy="75" r="4" fill="none" stroke="#F5F1E8" strokeWidth="1.5" opacity="0.45" />
            <circle cx="550" cy="90" r="4" fill="none" stroke="#F5F1E8" strokeWidth="1.5" opacity="0.45" />
            <circle cx="670" cy="190" r="4" fill="none" stroke="#F5F1E8" strokeWidth="1.5" opacity="0.45" />

            {/* Start flag */}
            <g transform="translate(30 60)">
              <line x1="0" y1="4" x2="0" y2="-32" stroke="#F26A21" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M0 -32 L24 -24 L0 -16 Z" fill="#F26A21" />
              <circle r="6" fill="#071321" stroke="#F5F1E8" strokeWidth="2.5" />
            </g>

            {/* Finish marker */}
            <g transform="translate(790 60)">
              <circle r="14" fill="none" stroke="#F26A21" strokeWidth="1.5" opacity="0.35" />
              <circle r="9" fill="none" stroke="#F26A21" strokeWidth="1.5" opacity="0.6" />
              <circle r="4.5" fill="#F26A21" />
            </g>
          </svg>

          <div style={{ maxWidth: '44ch', flexShrink: 0 }}>
            <p
              style={{
                color: 'rgba(245,241,232,0.55)',
                fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
                lineHeight: 1.8,
                fontWeight: 400,
              }}
            >
              A community run through the streets and stories of Manjummel,
              Kerala. Four seasons of spirit, sweat and the simple joy of
              running together.
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
