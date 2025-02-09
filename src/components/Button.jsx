import { useState } from "react";
import LoadingSub from "./LoadingSub";

function Button({
  bgColor = "var(--accent)",
  hoverBgColor = "var(--accent-dark)",
  type = "button",
  text = "Button",
  className = "",
  textColor = "text-primary",
  loading = false,
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type={type}
      className={`px-4 py-2 cursor-pointer rounded-sm w-auto duration-100 ${
        loading ? "text-transparent" : textColor
      } ${className}`}
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
      disabled={loading ? true : false}
    >
      {text}
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center self-center">
          <LoadingSub />
        </div>
      ) : null}
    </button>
  );
}

export default Button;
