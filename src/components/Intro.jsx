import StaggerWords from './StaggerWords';

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
            paddingTop: 'clamp(3rem, 7vw, 6rem)',
          }}
        >
          {/* Headline */}
          <div>
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
                fontSize: 'clamp(2.5rem, 9vw, 8rem)',
                color: '#F5F1E8',
                lineHeight: 0.92,
              }}
            >
              <StaggerWords text="RUN THROUGH" />
              <br />
              <span
                className="text-outline"
                style={{ WebkitTextStrokeColor: 'rgba(245,241,232,0.35)' }}
              >
                <StaggerWords text="MANJUMMEL." startIndex={2} />
              </span>
            </h2>
          </div>
        </div>

        {/* Illustration + paragraph (left) / big funky stats (right) */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'stretch',
            gap: 'clamp(2rem, 4vw, 3rem)',
            marginTop: 'clamp(2.5rem, 5vw, 4rem)',
            maxWidth: '1100px',
          }}
        >
          {/* Left: route illustration + paragraph */}
          <div style={{ flex: '1 1 480px', minWidth: 0 }}>
            {/* Route line art — start flag, winding course, checkpoints, finish */}
            <svg
              aria-hidden="true"
              className="intro-route"
              viewBox="0 0 820 320"
              fill="none"
              style={{ width: '100%', maxWidth: '860px', height: 'auto' }}
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

            <p
              style={{
                color: 'rgba(245,241,232,0.6)',
                fontSize: 'clamp(1.05rem, 1.9vw, 1.35rem)',
                lineHeight: 1.75,
                fontWeight: 400,
                maxWidth: '860px',
                marginTop: 'clamp(1.5rem, 3vw, 2.5rem)',
              }}
            >
              A community run through the streets and stories of Manjummel
              and Eloor. Four seasons of spirit, sweat and the simple joy of
              running together.
            </p>
          </div>

          {/* Right: big funky stat stack — same height as the left column */}
          <div
            className="intro-stat-row"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flex: '0 0 auto',
              width: 'clamp(7rem, 12vw, 9rem)',
            }}
          >
            {[
              { val: '04', label: 'Season' },
              { val: '03', label: 'Distances' },
              { val: '02', label: 'Oct 2026' },
              { val: '01', label: 'Of a kind' },
            ].map((item) => (
              <div
                key={item.label}
                className="stat-block intro-stat-funky"
                style={{ textAlign: 'right' }}
              >
                <p
                  className="font-display stat-block-value intro-stat-funky-value"
                  style={{
                    fontSize: 'clamp(2.75rem, 6vw, 4rem)',
                    color: '#F5F1E8',
                  }}
                >
                  {item.val}
                </p>
                <p
                  className="label-sm"
                  style={{
                    color: '#F26A21',
                    marginTop: '0.2rem',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="divider" style={{ marginTop: 'clamp(3rem, 7vw, 6rem)' }} />
      </div>
    </section>
  );
}
