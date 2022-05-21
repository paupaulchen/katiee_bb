import React, { useState } from "react";

export default function Button({ handleClick, className, label }) {
  const [isOnButton, setIsOnButton] = useState(false);

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
      onMouseEnter={() => setIsOnButton(true)}
      onMouseLeave={() => setIsOnButton(false)}
      className={className}
      style={hoverStyle}
    >
      {label}
    </button>
  );
}
