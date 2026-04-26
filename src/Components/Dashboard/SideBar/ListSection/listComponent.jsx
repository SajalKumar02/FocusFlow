import React, { useCallback } from "react";

const ListComponent = ({
  title,
  icon: Icon,
  count,
  selected,
  expanded,
  onSelect,
  colorClass = "",
  iconBgClass = "",
  countBgClass = "",
  countTextClass = "",
  borderClass = "",
  ariaLabel = "",
}) => {
  const handleClick = useCallback(() => {
    if (typeof onSelect === "function") {
      onSelect();
    }
  }, [onSelect]);

  return (
    <li>
      <button
        type="button"
        className={`flex items-center py-2.5 px-3 rounded-xl transition-colors duration-150 cursor-pointer group w-full outline-none relative border border-transparent border-l-4
          ${expanded ? "justify-between" : "justify-center"}
          ${colorClass}
          ${selected ? borderClass : ""}
        `}
        onClick={handleClick}
        tabIndex={0}
        aria-label={ariaLabel || title}
        aria-current={selected ? "page" : undefined}
      >
        <div
          className={`flex items-center ${
            expanded ? "gap-3" : "gap-0 justify-center w-full"
          }`}
        >
          <span
            className={`inline-flex items-center justify-center rounded-full ${iconBgClass}`}
          >
            {Icon && <Icon size={18} strokeWidth={2} />}
          </span>
          {expanded && (
            <span
              className={`text-base ml-3 ${
                selected ? "font-bold text-slate-900" : "font-medium text-slate-600"
              }`}
            >
              {title}
            </span>
          )}
        </div>
        {expanded && count !== undefined && (
          <span
            className={`text-xs font-semibold px-2.5 py-0.5 rounded-full shadow-sm ${countBgClass} ${countTextClass} ${
              selected ? "border border-current" : ""
            }`}
          >
            {count}
          </span>
        )}
      </button>
    </li>
  );
};

export default ListComponent;
