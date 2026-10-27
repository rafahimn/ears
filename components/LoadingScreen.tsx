'use client';
import { useEffect, useState } from 'react';
import { sitePath } from '../lib/paths';

export function LoadingScreen() {
  // Render on the server so the first-load animation is present before hydration.
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(false);
      return;
    }
    // CSS animates the screen out. This timeout is only a safety net if animation events are suppressed.
    const fallback = window.setTimeout(() => setVisible(false), 1800);
    return () => window.clearTimeout(fallback);
  }, []);

  if (!visible) return null;
  return (
    <div
      className="premium-loading-screen"
      role="status"
      aria-label="Loading website"
      onAnimationEnd={(event) => {
        if (event.target === event.currentTarget && event.animationName === 'loaderFadeOut') {
          setVisible(false);
        }
      }}
    >
      <div className="loading-emblem"><img src={sitePath('/brand/logo.png')} alt="" /></div>
      <div className="loading-brand">EMIRATES ALUMINIUM <span>SHUTTER LLC</span></div>
      <div className="loading-ring" aria-hidden="true" />
      <p>Loading your experience</p>
      <div className="loading-track" aria-hidden="true"><span /></div>
    </div>
  );
}
