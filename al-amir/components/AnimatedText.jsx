// Splits text into per-character spans for the rotateY reveal (LTR only; RTL falls back to a fade).
// Characters are grouped per word so lines never break mid-word.
export default function AnimatedText({ text, as: Tag = 'span', className = '', delay = 0, rtl = false }) {
  if (rtl) return <Tag className={`text-animation ${className}`} style={{ transitionDelay: `${delay}s` }}>{text}</Tag>;
  let idx = 0;
  const words = text.split(' ');
  return (
    <Tag className={`text-animation ${className}`}>
      {words.map((word, wi) => (
        <span className="word" key={wi}>
          {Array.from(word).map((ch) => {
            const i = idx++;
            return <span className="ch" key={i} style={{ transitionDelay: `${delay + i * 0.04}s` }}>{ch}</span>;
          })}
          {wi < words.length - 1 && <span className="ch sp" style={{ transitionDelay: `${delay + idx++ * 0.04}s` }}> </span>}
        </span>
      ))}
    </Tag>
  );
}
