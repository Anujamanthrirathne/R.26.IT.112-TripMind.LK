const STRIPS = 56;

function WavingFlag({ image }) {
  return (
    <div className="flag-wave" aria-hidden="true">
      {Array.from({ length: STRIPS }, (_, i) => (
        <span
          key={i}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: `${STRIPS * 100}% 100%`,
            backgroundPosition: `${(i / (STRIPS - 1)) * 100}% 0`,
            animationDelay: `${i * -0.09}s`,
          }}
        />
      ))}
    </div>
  );
}

export default WavingFlag;