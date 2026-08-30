import { useRegisterModal } from '../context/RegisterModalContext';

export default function Footer() {
  const openRegisterModal = useRegisterModal();

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
          <a
            href="/"
            className="footer-brand-link"
            aria-label="NSS Manjummel Marathon, Home"
          >
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
          </a>

          {/* Right: date + CTA */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '0.75rem',
              flexShrink: 0,
            }}
          >
            <time
              dateTime="2026-10-02"
              className="label-xs"
              style={{ color: 'rgba(245,241,232,0.3)' }}
            >
              02 OCT 2026
            </time>
            <button
              type="button"
              onClick={openRegisterModal}
              className="btn-nav"
              id="footer-register-btn"
              aria-label="Register for the marathon"
              style={{ fontSize: '0.65rem' }}
            >
              REGISTER
              <span className="btn-arrow" aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="divider" />

        {/* Enquiries */}
        <div
          style={{
            paddingTop: '1.75rem',
            paddingBottom: '0.5rem',
            display: 'flex',
            alignItems: 'baseline',
            flexWrap: 'wrap',
            gap: '0.5rem 1rem',
          }}
        >
          <p
            className="label-xs"
            style={{ color: 'rgba(245,241,232,0.3)' }}
          >
            ENQUIRIES
          </p>
          <a
            href="tel:+919446677000"
            className="footer-contact-link"
            aria-label="Call +91 94466 77000 for enquiries"
          >
            +91 94466 77000
          </a>
          <span aria-hidden="true" style={{ color: 'rgba(245,241,232,0.15)' }}>
            /
          </span>
          <a
            href="tel:+919447986776"
            className="footer-contact-link"
            aria-label="Call +91 94479 86776 for enquiries"
          >
            +91 94479 86776
          </a>
          <span aria-hidden="true" style={{ color: 'rgba(245,241,232,0.15)' }}>
            /
          </span>
          <a
            href="tel:+918301930872"
            className="footer-contact-link"
            aria-label="Call +91 83019 30872 for enquiries"
          >
            +91 83019 30872
          </a>
        </div>

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
