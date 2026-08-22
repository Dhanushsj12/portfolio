import { useState } from "react";

function MeteorField({ meteorCount = 16, starCount = 60 }) {
  const [meteors] = useState(() =>
    Array.from({ length: meteorCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 50}%`,
      delay: `${Math.random() * 9}s`,
      duration: `${5 + Math.random() * 4}s`,
      height: `${90 + Math.random() * 60}px`,
    }))
  );

  const [stars] = useState(() =>
    Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${1 + Math.random() * 1.5}px`,
      delay: `${Math.random() * 4}s`,
      duration: `${2 + Math.random() * 3}s`,
    }))
  );

  return (
    <div className="star-field" aria-hidden="true">
      {stars.map((s) => (
        <span
          key={`s-${s.id}`}
          className="star"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
            animationDuration: s.duration,
          }}
        />
      ))}
      {meteors.map((m) => (
        <span
          key={`m-${m.id}`}
          className="meteor"
          style={{
            left: m.left,
            height: m.height,
            animationDelay: m.delay,
            animationDuration: m.duration,
          }}
        />
      ))}
    </div>
  );
}

export default MeteorField;