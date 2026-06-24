import React, { useState, useEffect } from 'react';

const Loader = ({ seconds = 2 }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setProgress(1);
    }, seconds);
  }, [seconds]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <div className="w-64 h-3 bg-gray-200 rounded overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-2000"
          style={{ width: `${progress * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
