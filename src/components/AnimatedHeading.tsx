import React, { useEffect, useState } from 'react';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
}

export function AnimatedHeading({ text, className = '' }: AnimatedHeadingProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(true);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  const lines = text.split('\n');
  const charDelay = 30; // 30ms

  return (
    <h1
      className={className}
      style={{ letterSpacing: '-0.04em' }}
    >
      {lines.map((line, lineIndex) => {
        // Calculate cumulative characters in previous lines for staggered entry
        let previousCharsCount = 0;
        for (let i = 0; i < lineIndex; i++) {
          previousCharsCount += lines[i].length;
        }

        // We use the requested formula for delay, resolving the lineLength conceptually
        // as either the length of the current line, or falling back to simple progressive offset
        const lineLength = line.length;

        return (
          <div key={lineIndex} className="block overflow-hidden">
            {line.split('').map((char, charIndex) => {
              // Formula from instructions: (lineIndex * lineLength * charDelay) + (charIndex * charDelay)
              // We'll use this precisely as requested
              const delay = (lineIndex * lineLength * charDelay) + (charIndex * charDelay);

              return (
                <span
                  key={charIndex}
                  className="inline-block transition-all ease-out"
                  style={{
                    opacity: isAnimating ? 1 : 0,
                    transform: isAnimating ? 'translateX(0)' : 'translateX(-18px)',
                    transitionDuration: '500ms',
                    transitionDelay: `${delay}ms`,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              );
            })}
          </div>
        );
      })}
    </h1>
  );
}
