export default function Footer() {
  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      style={{
        backgroundColor: '#071321',
        padding: 'clamp(2.5rem, 5vw, 3.5rem) clamp(1.5rem, 5vw, 4rem)',
        borderTop: '1px solid rgba(245,241,232,0.06)',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '2rem',
            marginBottom: '2rem',
          }}
        >
          {/* Left: brand */}
          <div>
            <p
              className="label-xs"
              style={{ color: 'rgba(245,241,232,0.3)', marginBottom: '0.3rem' }}
            >
              NSS MANJUMMEL MARATHON
            </p>
            <p
              className="label-xs"
              style={{ color: 'rgba(245,241,232,0.18)' }}
            >
              SEASON 04
            </p>
          </div>

          {/* Right: date + CTA */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '0.75rem',
            }}
          >
            <time
              dateTime="2026-10-02"
              className="label-xs"
              style={{ color: 'rgba(245,241,232,0.3)' }}
            >
              02 OCT 2026
            </time>
            <a
              href="#register"
              className="btn-nav"
              id="footer-register-btn"
              aria-label="Register for the marathon"
              style={{ fontSize: '0.65rem' }}
            >
              REGISTER
              <span className="btn-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="divider" />

        {/* Bottom row: copyright */}
        <div
          style={{
            paddingTop: '1.25rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p
            className="label-xs"
            style={{ color: 'rgba(245,241,232,0.15)' }}
          >
            © 2026 NSS Manjummel Marathon.
          </p>
          <p
            className="label-xs"
            style={{ color: 'rgba(245,241,232,0.1)' }}
          >
            MANJUMMEL · ELOOR · KERALA
          </p>
        </div>
      </div>
    </footer>
  );
}
