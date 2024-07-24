import React from "react";

type ChevronUpIconProps = {
  color?: string;
}
function ChevronUpIcon({ color }: ChevronUpIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color || "#6B7280"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 15l5.293-5.293a1 1 0 011.414 0L18 15"
      ></path>
    </svg>
  );
}

export default ChevronUpIcon;