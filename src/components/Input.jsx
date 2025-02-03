import React, { useId } from "react";

const Input = React.forwardRef(
  (
    {
      divClass = "",
      labelClass = "",
      labelText,
      type = "text",
      onChange = "{() => {}}",
      placeholder = "",
      value = "",
      className = "",
      ...props
    },
    ref
  ) => {
    const id = useId();

    return (
      <div className={`w-full ${divClass}`}>
        {labelText && (
            <label className={labelClass} htmlFor={id}>
            {labelText}
          </label>
        )}
        <input
          type={type}
          className={className}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          {...props}
          ref={ref}
        />
      </div>
    );
  }
);

export default Input;
