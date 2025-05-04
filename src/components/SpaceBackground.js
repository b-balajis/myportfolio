export default function SpaceBackground() {
  const stars = new Array(189).fill(0);

  return (
    <div className="fixed inset-0 bg-black overflow-hidden z-[-1]">
      {stars.map((_, i) => {
        const size = Math.random() * 2 + 1; // Star size
        const left = Math.random() * 100; // %
        const delay = Math.random() * 5; // seconds
        const duration = 20 + Math.random() * 30; // duration of float

        return (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-80 animate-blink"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${Math.random() * 100}vh`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              animationName: "float, blink",
              animationTimingFunction: "linear, ease-in-out",
              animationIterationCount: "infinite",
            }}
          />
        );
      })}
    </div>
  );
}
