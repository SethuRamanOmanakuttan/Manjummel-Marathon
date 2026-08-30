/**
 * Splits a headline string into per-word <span>s carrying a --stagger-i
 * custom property, so CSS (.stagger-word, see index.css) can cascade
 * the reveal in with a small delay per word instead of the whole line
 * appearing at once. Designed to sit inside an existing .reveal /
 * .anim-headline parent — it does not trigger its own visibility, it
 * only staggers the timing once the parent becomes visible.
 *
 * Usage: <StaggerWords text="RUN THROUGH" /> — renders each word as an
 * inline-block span separated by real spaces, safe to mix with
 * surrounding markup (line breaks, nested outline spans, etc).
 */
export default function StaggerWords({ text, startIndex = 0 }) {
  const words = text.split(' ');
  return words.map((word, i) => (
    <span
      key={`${word}-${i}`}
      className="stagger-word"
      style={{ '--stagger-i': startIndex + i }}
    >
      {word}
      {i < words.length - 1 ? ' ' : ''}
    </span>
  ));
}
