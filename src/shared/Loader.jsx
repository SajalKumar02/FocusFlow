import React, { useState, useEffect } from 'react';

// Design Reference:
// See design.md for UI specifications and styling directions for loaders.
// The loader bar should be visually in line with branding and spacing conventions outlined there.

const Loader = ({ seconds = 2 }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress from 0 to 100% over `seconds`
    const animationDuration = Number(seconds) * 1000;
    setProgress(0);
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const pct = Math.min(elapsed / animationDuration, 1);
      setProgress(pct);
      if (pct < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();

    // Cleanup in case loader unmounts
    return () => setProgress(0);
  }, [seconds]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <div
        className="w-[280px] sm:w-96 h-3 rounded-full overflow-hidden bg-loaderBg"
        style={{
          boxShadow: '0 4px 14px 0 #0023660d', // see design.md for shadow spec
        }}
      >
        <div
          className="h-full rounded-full transition-all"
          style={{
            width: `${progress * 100}%`,
            background: 'linear-gradient(90deg, #2869f6 0%, #679ef7 100%)', // see design.md
            transition: `width ${seconds}s cubic-bezier(0.4,0,0.2,1)`,
          }}
        ></div>
      </div>
      {/* Optionally show a spinner or logo above the bar, see design.md */}
    </div>
  );
};

export default Loader;
