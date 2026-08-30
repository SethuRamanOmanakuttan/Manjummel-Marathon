import { useEffect, useState } from 'react';

const RACE_DATE = new Date('2026-10-02T06:00:00+05:30');

function getRemaining() {
  const diff = Math.max(0, RACE_DATE.getTime() - Date.now());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  return { days, hours, mins, secs };
}

export default function Countdown() {
  const [time, setTime] = useState(getRemaining);

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { val: time.days, label: 'Days' },
    { val: time.hours, label: 'Hrs' },
    { val: time.mins, label: 'Min' },
    { val: time.secs, label: 'Sec' },
  ];

  return (
    <div
      className="anim-cta"
      style={{
        display: 'flex',
        alignItems: 'baseline',
        flexWrap: 'wrap',
        gap: 'clamp(0.6rem, 1.6vw, 1.1rem)',
      }}
      aria-label={`${time.days} days, ${time.hours} hours, ${time.mins} minutes to race day`}
    >
      {units.map((u, i) => (
        <div key={u.label} style={{ display: 'flex', alignItems: 'baseline', gap: 'clamp(0.6rem, 1.6vw, 1.1rem)' }}>
          <div style={{ textAlign: 'left' }}>
            <span
              aria-hidden="true"
              className="font-display"
              style={{
                display: 'block',
                fontSize: 'clamp(1.3rem, 3.2vw, 2.1rem)',
                color: '#F5F1E8',
                fontVariantNumeric: 'tabular-nums',
                lineHeight: 1,
              }}
            >
              {String(u.val).padStart(2, '0')}
            </span>
            <span
              className="label-xs"
              style={{ color: 'rgba(245,241,232,0.35)', marginTop: '0.25rem', display: 'block' }}
            >
              {u.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span aria-hidden="true" style={{ color: 'rgba(245,241,232,0.15)', fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}>
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
