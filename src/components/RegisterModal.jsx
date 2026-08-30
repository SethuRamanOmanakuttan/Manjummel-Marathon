import { useEffect, useRef } from 'react';

const PRICES = [
  { distance: '21 KM', tag: 'Half Marathon', price: 650 },
  { distance: '10 KM', tag: 'Run', price: 550 },
  { distance: '05 KM', tag: 'Fun Run', price: 350 },
];

export default function RegisterModal({ open, onClose }) {
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Escape to close, focus the close button on open, restore focus on close.
  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement;
    closeBtnRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab') {
        const focusable = dialogRef.current?.querySelectorAll(
          'button, a[href], input, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="register-modal-backdrop"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className="register-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="register-modal-title"
      >
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          className="register-modal-close"
          aria-label="Close"
        >
          ✕
        </button>

        <span className="label-sm" style={{ color: '#F26A21' }}>
          HOLD YOUR LACES
        </span>

        <h2 id="register-modal-title" className="font-display register-modal-title">
          REGISTRATION IS
          <br />
          <span className="text-outline" style={{ WebkitTextStrokeColor: 'rgba(245,241,232,0.65)' }}>
            LACING UP.
          </span>
        </h2>

        <p className="register-modal-copy">
          We're still tying our shoelaces and registration isn't open yet.
          Here's what it'll cost once it is.
        </p>

        <div className="register-modal-prices">
          {PRICES.map((p) => (
            <div key={p.distance} className="register-modal-price-row">
              <div>
                <p className="font-display register-modal-price-distance">{p.distance}</p>
                <p className="label-xs" style={{ color: 'rgba(245,241,232,0.4)', marginTop: '0.2rem' }}>
                  {p.tag}
                </p>
              </div>
              <p className="font-display register-modal-price-value">
                <span style={{ fontSize: '0.55em', opacity: 0.6 }}>₹</span>
                {p.price}
              </p>
            </div>
          ))}
        </div>

        <p className="register-modal-footnote">
          No spam, we'll let you know the moment it opens.
        </p>
      </div>
    </div>
  );
}
