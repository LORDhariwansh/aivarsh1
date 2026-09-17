import React from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const HeroGeometry: React.FC = () => {
  const reducedMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(244,240,231,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(244,240,231,0.4) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Orbital ring 1 */}
      <svg
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] ${!reducedMotion ? 'animate-orbit' : ''}`}
        viewBox="0 0 800 800"
        fill="none"
      >
        <circle cx="400" cy="400" r="300" stroke="rgba(244,240,231,0.06)" strokeWidth="1" />
        {/* Saffron dot traveling on orbit */}
        <circle cx="700" cy="400" r="3" fill="#C96A32" opacity="0.8">
          {!reducedMotion && (
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 400 400"
              to="360 400 400"
              dur="20s"
              repeatCount="indefinite"
            />
          )}
        </circle>
      </svg>

      {/* Orbital ring 2 */}
      <svg
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[600px] md:h-[600px] ${!reducedMotion ? 'animate-orbit-reverse' : ''}`}
        viewBox="0 0 600 600"
        fill="none"
      >
        <circle cx="300" cy="300" r="200" stroke="rgba(244,240,231,0.04)" strokeWidth="0.5" strokeDasharray="4 8" />
        <circle cx="500" cy="300" r="2" fill="#C96A32" opacity="0.5">
          {!reducedMotion && (
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 300 300"
              to="-360 300 300"
              dur="30s"
              repeatCount="indefinite"
            />
          )}
        </circle>
      </svg>

      {/* Inner orbital ring */}
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="120" stroke="rgba(244,240,231,0.03)" strokeWidth="0.5" />
      </svg>

      {/* Crosshair points */}
      <div className="absolute top-[20%] left-[15%] w-4 h-4">
        <div className="absolute top-1/2 left-0 w-full h-px bg-ai-ivory/10" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-ai-ivory/10" />
      </div>
      <div className="absolute bottom-[25%] right-[20%] w-4 h-4">
        <div className="absolute top-1/2 left-0 w-full h-px bg-ai-ivory/10" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-ai-ivory/10" />
      </div>

      {/* Static saffron dots */}
      <div className={`absolute top-[30%] right-[25%] w-1.5 h-1.5 rounded-full bg-ai-saffron/40 ${!reducedMotion ? 'animate-pulse-dot' : ''}`} />
      <div className={`absolute bottom-[35%] left-[30%] w-1 h-1 rounded-full bg-ai-saffron/30 ${!reducedMotion ? 'animate-pulse-dot' : ''}`} style={{ animationDelay: '1.5s' }} />
      <div className={`absolute top-[60%] right-[10%] w-1 h-1 rounded-full bg-ai-ivory/20 ${!reducedMotion ? 'animate-pulse-dot' : ''}`} style={{ animationDelay: '2.5s' }} />

      {/* Fine technical lines */}
      <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none">
        <line x1="200" y1="0" x2="200" y2="900" stroke="rgba(244,240,231,0.02)" strokeWidth="0.5" />
        <line x1="1240" y1="0" x2="1240" y2="900" stroke="rgba(244,240,231,0.02)" strokeWidth="0.5" />
        <line x1="0" y1="450" x2="1440" y2="450" stroke="rgba(244,240,231,0.015)" strokeWidth="0.5" />
      </svg>

      {/* Subtle center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-ai-saffron/[0.02] rounded-full blur-[100px]" />
    </div>
  );
};
