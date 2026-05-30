import React, { useEffect, useState, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delayMs?: number;
  durationMs?: number;
  className?: string;
}

export function FadeIn({
  children,
  delayMs = 0,
  durationMs = 1000,
  className = '',
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delayMs);

    return () => clearTimeout(timeout);
  }, [delayMs]);

  return (
    <div
      className={`transition-opacity ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transitionDuration: `${durationMs}ms`,
      }}
    >
      {children}
    </div>
  );
}
