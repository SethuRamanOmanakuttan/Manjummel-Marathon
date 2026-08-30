export default function CauseSection() {
  return (
    <section
      aria-labelledby="cause-heading"
      style={{
        backgroundColor: '#071321',
        padding: 'clamp(5rem, 12vw, 10rem) clamp(1.5rem, 5vw, 4rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ghost shield watermark */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 'clamp(-2rem, -3vw, -4rem)',
          bottom: '-6%',
          zIndex: 0,
          userSelect: 'none',
          pointerEvents: 'none',
          fontSize: 'clamp(10rem, 26vw, 24rem)',
          fontWeight: 800,
          letterSpacing: '-0.05em',
          lineHeight: 0.85,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(245,241,232,0.04)',
        }}
      >
        തൂഫാൻ
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="divider" />

        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            columnGap: '2rem',
            paddingTop: 'clamp(3rem, 7vw, 6rem)',
          }}
        >
          {/* Left: heading */}
          <div style={{ gridColumn: 'span 12' }}>
            <p className="label-sm" style={{ color: '#F26A21', marginBottom: '2rem' }}>
              RUNNING WITH A CAUSE
            </p>

            <h2
              id="cause-heading"
              className="font-display"
              style={{
                fontSize: 'clamp(2.6rem, 7.5vw, 6.5rem)',
                color: '#F5F1E8',
                lineHeight: 0.94,
                maxWidth: '16ch',
              }}
            >
              EVERY STRIDE IS A STAND
              <br />
              <span
                className="text-outline"
                style={{ WebkitTextStrokeColor: 'rgba(245,241,232,0.35)' }}
              >
                AGAINST ADDICTION.
              </span>
            </h2>
          </div>
        </div>

        {/* Body + stats */}
        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            columnGap: '2rem',
            marginTop: 'clamp(2.5rem, 5vw, 4rem)',
          }}
        >
          <div style={{ gridColumn: 'span 12' }}>
            <p
              style={{
                color: 'rgba(245,241,232,0.6)',
                fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)',
                lineHeight: 1.8,
                fontWeight: 400,
                maxWidth: '62ch',
              }}
            >
              Season 04 runs in solidarity with{' '}
              <strong style={{ color: '#F5F1E8', fontWeight: 700 }}>
                Operation Thoofan
              </strong>
              , the Kerala Government's statewide anti-narcotics campaign led
              by Kerala Police and the Excise Department. Launched in June
              2026, Thoofan combines strict enforcement with awareness,
              treatment and grassroots community action to protect Kerala's
              youth from the spread of drugs. NSS Manjummel Marathon is proud
              to lend its start line to that fight. A state that runs
              together is harder to break.
            </p>

            {/* Stat row — real campaign numbers */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'clamp(2rem, 5vw, 3.5rem)',
                marginTop: 'clamp(2.5rem, 5vw, 3.5rem)',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(245,241,232,0.08)',
              }}
            >
              {[
                { val: '9,000+', label: 'Cases registered' },
                { val: '9,700+', label: 'Arrests made' },
                { val: '75', label: 'Days in phase one' },
              ].map((item) => (
                <div key={item.label}>
                  <p
                    className="font-display"
                    style={{
                      fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                      color: '#F5F1E8',
                    }}
                  >
                    {item.val}
                  </p>
                  <p
                    className="label-xs"
                    style={{ color: 'rgba(245,241,232,0.3)', marginTop: '0.5rem' }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA link */}
            <div style={{ marginTop: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
              <a
                href="https://www.operationtoofan.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-nav"
                aria-label="Learn more about Operation Thoofan (opens in a new tab)"
              >
                LEARN ABOUT OPERATION THOOFAN
                <span className="btn-arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="divider" style={{ marginTop: 'clamp(3rem, 7vw, 6rem)' }} />
      </div>
    </section>
  );
}
