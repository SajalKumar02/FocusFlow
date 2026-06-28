import React from 'react';

const DateAndTimeHeader = () => {
  const currentDate = () => {
    const now = new Date();
    const options = {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    };
    return now.toLocaleDateString('en-US', options);
  };

  return (
    <div className="flex flex-col items-start my-1 sm:my-2">
      <span className="text-base sm:text-md font-semibold text-title">
        Today
      </span>
      <span className="text-muted text-xs sm:text-sm">{currentDate()}</span>
    </div>
  );
};

export default DateAndTimeHeader;
