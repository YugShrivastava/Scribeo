import React, { useId } from "react";

function Select(
  { options = [], label, labelClass, divClass, className = "", ...props },
  ref
) {
  const id = useId;

  return (
    <div className={`w-full ${divClass}`}>
      {label && (
        <label htmlFor={id} className={labelClass}>
          {label}
        </label>
      )}
      <select
        name=""
        id={id}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        {...props}
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
