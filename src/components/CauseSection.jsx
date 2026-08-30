import { useRef } from 'react';
import StaggerWords from './StaggerWords';
import useCountUp from '../hooks/useCountUp';

const STATS = [
  { target: 9000, suffix: '+', label: 'Cases registered' },
  { target: 9700, suffix: '+', label: 'Arrests made' },
  { target: 75, suffix: '', label: 'Days in phase one' },
];

function StatBlock({ target, suffix, label }) {
  const [ref, value] = useCountUp(target);
  return (
    <div ref={ref} className="stat-block">
      <p className="font-display stat-block-value" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', color: '#F5F1E8', fontVariantNumeric: 'tabular-nums' }}>
        {value.toLocaleString('en-IN')}
        {suffix}
      </p>
      <p className="label-xs" style={{ color: 'rgba(245,241,232,0.3)', marginTop: '0.5rem' }}>
        {label}
      </p>
    </div>
  );
}

export default function CauseSection() {
  const cursorRef = useRef(null);

  const onCursorMove = (e) => {
    const el = cursorRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

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
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div
          className="reveal"
          style={{
            paddingTop: 'clamp(1.5rem, 3vw, 2.5rem)',
          }}
        >
          {/* Left: heading */}
          <div>
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
              <StaggerWords text="EVERY STRIDE IS A STAND" />
              <br />
              <span
                className="text-outline"
                style={{ WebkitTextStrokeColor: 'rgba(245,241,232,0.35)' }}
              >
                <StaggerWords text="AGAINST ADDICTION." startIndex={5} />
              </span>
            </h2>
          </div>
        </div>

        {/* Body + stats */}
        <div
          className="reveal"
          style={{
            marginTop: 'clamp(2.5rem, 5vw, 4rem)',
          }}
        >
          <div>
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

            {/* Stat row — real campaign numbers. Three items in a flex
                row wrap unevenly on narrow screens (2 then 1 alone), so
                .cause-stat-row switches to a deliberate 2-column grid
                below 640px — see index.css. */}
            <div
              className="stat-row-line cause-stat-row"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'clamp(2rem, 5vw, 3.5rem)',
                marginTop: 'clamp(2.5rem, 5vw, 3.5rem)',
                paddingTop: '2rem',
              }}
            >
              {STATS.map((item) => (
                <StatBlock key={item.label} {...item} />
              ))}
            </div>

            {/* CTA link */}
            <div style={{ marginTop: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
              <a
                ref={cursorRef}
                onMouseMove={onCursorMove}
                href="https://keralapolice.gov.in/page/operation-toofan-the-narco-hunt"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-nav cursor-glow"
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
