import { useState } from "react";

function Button({
  bgColor = "var(--accent)",
  hoverBgColor = "var(--accent-dark)",
  type = "button",
  text = "Button",
  className = "",
  textColor = "text-primary",
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type={type}
      className={`px-4 py-2 cursor-pointer rounded-sm w-auto duration-100 ${textColor} ${className}`}
      style={
        isHovered
          ? { backgroundColor: hoverBgColor }
          : { backgroundColor: bgColor }
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      {...props}
    >
      {text}
    </button>
  );
}

export default Button;
