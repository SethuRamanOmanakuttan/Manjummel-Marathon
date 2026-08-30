const ITEMS = [
  'RUN', 'RESIST', 'RISE', 'REPEAT', 'RUN FREE', 'RUN CLEAN',
];

function Track() {
  return (
    <div className="marquee-track">
      {ITEMS.map((item, i) => (
        <span key={i} className="marquee-item font-display">
          {item}
          <span aria-hidden="true" className="marquee-dot">●</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <Track />
      <Track />
    </div>
  );
}
