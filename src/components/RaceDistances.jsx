const races = [
  {
    id: '01',
    distance: '21 KM',
    category: 'HALF MARATHON',
    tag: 'Flagship',
    blurb: 'The full test. Timed chip, marked route, finisher medal.',
  },
  {
    id: '02',
    distance: '10 KM',
    category: 'RUN',
    tag: 'Competitive',
    blurb: 'Fast and focused, for runners chasing a personal best.',
  },
  {
    id: '03',
    distance: '05 KM',
    category: 'FUN RUN',
    tag: 'Open to all',
    blurb: 'Bring the family. Walk it, jog it, just show up and move.',
  },
];

export default function RaceDistances() {
  return (
    <section
      aria-labelledby="races-heading"
      style={{
        backgroundColor: '#071321',
        padding: '0 clamp(1.5rem, 5vw, 4rem)',
        paddingTop: 'clamp(4rem, 10vw, 7rem)',
        paddingBottom: 'clamp(2.5rem, 6vw, 4.5rem)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        {/* Section header */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            marginBottom: 'clamp(2rem, 5vw, 4rem)',
          }}
        >
          <h2
            id="races-heading"
            className="label-sm"
            style={{ color: '#F26A21' }}
          >
            RACE CATEGORIES
          </h2>
          <span
            className="label-xs"
            style={{ color: 'rgba(245,241,232,0.2)' }}
          >
            02 OCT 2026
          </span>
        </div>

        {/* Race list */}
        <div role="list" aria-label="Race distance categories">
          {races.map((race, index) => (
            <div
              key={race.id}
              role="listitem"
              className="race-row reveal"
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: 'clamp(1.5rem, 3.5vw, 2.5rem) 0',
                gap: 'clamp(1rem, 3vw, 2rem)',
                transitionDelay: `${index * 0.08}s`,
              }}
            >
              {/* Index number */}
              <span
                className="race-accent label-xs"
                style={{
                  color: 'rgba(245,241,232,0.38)',
                  width: '2rem',
                  flexShrink: 0,
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {race.id}
              </span>

              {/* Distance — the hero of each row */}
              <span
                className="font-display"
                style={{
                  fontSize: 'clamp(2rem, 6vw, 5rem)',
                  color: '#F5F1E8',
                  flex: '0 0 auto',
                  minWidth: 'clamp(6.5rem, 17vw, 15rem)',
                }}
              >
                {race.distance}
              </span>

              {/* Category + tag */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <span
                  className="label-sm"
                  style={{
                    color: 'rgba(245,241,232,0.78)',
                    display: 'block',
                    fontSize: 'clamp(0.85rem, 1.6vw, 1rem)',
                  }}
                >
                  {race.category}
                </span>
                <span
                  style={{
                    display: 'inline-block',
                    marginTop: '0.5rem',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    color: 'rgba(242,106,33,0.75)',
                    textTransform: 'uppercase',
                  }}
                >
                  {race.tag}
                </span>
                <p
                  className="race-blurb"
                  style={{
                    fontSize: '0.85rem',
                    color: 'rgba(245,241,232,0.4)',
                    maxWidth: '42ch',
                  }}
                >
                  {race.blurb}
                </p>
              </div>

              {/* Arrow */}
              <span
                className="race-arrow"
                aria-hidden="true"
                style={{
                  fontSize: 'clamp(0.9rem, 1.8vw, 1.2rem)',
                  color: 'rgba(245,241,232,0.3)',
                  flexShrink: 0,
                }}
              >
                →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
