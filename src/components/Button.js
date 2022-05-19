import React, { useState } from "react";

export default function Button({ handleClick, className, label }) {
  const [isOnButton, setIsOnButton] = useState(false);

  const mouseEnter = () => setIsOnButton(true);
  const mouseLeave = () => setIsOnButton(false);

  const hoverStyle = isOnButton
    ? {
        borderStyle: "solid",
        borderWidth: "5px",
        borderColor: "#ed0a0a",
      }
    : {};

  return (
    <button
      onClick={handleClick}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className={className}
      style={hoverStyle}
    >
      {label}
    </button>
  );
}
