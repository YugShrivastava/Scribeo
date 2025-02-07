import React, { useId } from "react";

function Select({ options = [], label, className = "", ...props }, ref) {
  const id = useId();

  return (
    <div
      className={`flex flex-col items-baseline gap-2 justify-center rounded-sm w-full`}
    >
      {label && <label className="text-primary px-0" htmlFor={id}>{label}</label>}
      <select
        name=""
        // id={id}
        className={`input w-full px-4 py-2 border box-border rounded-sm max-w-full ${className}`}
        {...props}
        ref={ref}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
