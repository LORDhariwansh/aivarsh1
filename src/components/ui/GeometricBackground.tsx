import React from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface Props {
  variant?: 'default' | 'dense';
}

export const GeometricBackground: React.FC<Props> = ({ variant = 'default' }) => {
  const reducedMotion = useReducedMotion();
  const opacity = variant === 'dense' ? '0.04' : '0.025';

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Grid */}
      <div
        className="absolute inset-0"
        style={{
          opacity,
          backgroundImage:
            'linear-gradient(rgba(244,240,231,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(244,240,231,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Orbital accent */}
      <svg
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-30 ${!reducedMotion ? 'animate-orbit' : ''}`}
        viewBox="0 0 500 500"
        fill="none"
      >
        <circle cx="250" cy="250" r="200" stroke="rgba(201,106,50,0.08)" strokeWidth="0.5" />
        <circle cx="450" cy="250" r="2" fill="#C96A32" opacity="0.4" />
      </svg>

      {/* Saffron dots */}
      <div className={`absolute top-[20%] left-[40%] w-1 h-1 rounded-full bg-ai-saffron/20 ${!reducedMotion ? 'animate-pulse-dot' : ''}`} />
      <div className={`absolute bottom-[30%] right-[35%] w-1 h-1 rounded-full bg-ai-saffron/15 ${!reducedMotion ? 'animate-pulse-dot' : ''}`} style={{ animationDelay: '2s' }} />
    </div>
  );
};
