const EVENT_TITLE = 'NSS Manjummel Marathon, Season 04';
const EVENT_LOCATION = 'Kasturba English Medium School, Eloor, Kerala';
const EVENT_START = '20261002T023000Z';
const EVENT_END = '20261002T053000Z';

function downloadIcs() {
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//NSS Manjummel Marathon//Season 04//EN',
    'BEGIN:VEVENT',
    `UID:nss-manjummel-marathon-s04@manjummelmarathon`,
    `DTSTAMP:${EVENT_START}`,
    `DTSTART:${EVENT_START}`,
    `DTEND:${EVENT_END}`,
    `SUMMARY:${EVENT_TITLE}`,
    `LOCATION:${EVENT_LOCATION}`,
    'DESCRIPTION:Race day for the NSS Manjummel Marathon, Season 04 — for a Drug-Free Kerala.',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'nss-manjummel-marathon.ics';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

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
        <div
          className="reveal event-date-grid"
          style={{
            paddingTop: 'clamp(3rem, 7vw, 6rem)',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.1fr) minmax(280px, 0.9fr)',
            gap: 'clamp(2.5rem, 5vw, 4rem)',
            alignItems: 'center',
          }}
        >
          <div>
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
                className="font-display text-outline"
                style={{
                  display: 'block',
                  fontSize: 'clamp(5rem, 16vw, 14rem)',
                  WebkitTextStrokeColor: 'rgba(245,241,232,0.45)',
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

            {/* Add to calendar CTA */}
            <button
              type="button"
              onClick={downloadIcs}
              className="event-calendar-btn"
              style={{ marginTop: 'clamp(2rem, 4.5vw, 2.75rem)' }}
            >
              <span className="event-calendar-btn-icon" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="5" width="18" height="16" rx="1.5" stroke="currentColor" strokeWidth="2" />
                  <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                  <path d="M8 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M16 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 13V18M12 18L9.5 15.5M12 18L14.5 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              ADD TO CALENDAR
            </button>
          </div>

          {/* Race start map */}
          <div className="event-map-col">
            <span
              className="label-xs"
              style={{
                color: 'rgba(245,241,232,0.4)',
                letterSpacing: '0.24em',
                display: 'block',
                marginBottom: '1rem',
              }}
            >
              RACE START &nbsp;·&nbsp;{' '}
              <span style={{ color: '#F5F1E8' }}>KASTURBA ENGLISH MEDIUM SCHOOL</span>
            </span>
            <a
              href="https://www.google.com/maps/place/Kasturba+English+Medium+School/@10.0595336,76.2947303,1173m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3b080ddffb38d8ef:0x394d877dd559b65c!8m2!3d10.0595336!4d76.2947303!16s%2Fg%2F1hm36f0sq?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open race start location, Kasturba English Medium School, in Google Maps"
              className="event-map-frame"
            >
              <iframe
                title="Race start — Kasturba English Medium School"
                src="https://www.google.com/maps?q=Kasturba+English+Medium+School,Eloor,Kerala&z=15&output=embed"
                className="event-map-embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                tabIndex={-1}
                aria-hidden="true"
              />
              <span className="event-map-overlay" aria-hidden="true">
                <span className="event-map-pin">
                  VIEW ON MAPS <span aria-hidden="true">↗</span>
                </span>
              </span>
            </a>
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
