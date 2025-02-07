import { forwardRef } from "react";

function Input({label, type = "text", placeholder, className = '', ...props }, ref) {
  return (
    <div className="flex flex-col items-baseline gap-2 justify-center rounded-sm w-full">
      {label && <label className="text-primary px-0" htmlFor={Date.now()}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        className={`input w-full px-4 py-2 border box-border rounded-sm max-w-full ` + className}
        {...props}
        ref={ref}
      />
    </div>
  );
}

export default forwardRef(Input);
