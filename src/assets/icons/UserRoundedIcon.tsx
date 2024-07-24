import React from "react";

type UserRoundedIconProps = {
  width?: number;
  height?: number;
  color?: string;

}
function UserRoundedIcon({ width = 16, height = 16, color }: UserRoundedIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g stroke={color || "#1C274C"} strokeWidth="1.5">
        <circle cx="12" cy="9" r="3"></circle>
        <circle cx="12" cy="12" r="10"></circle>
        <path
          strokeLinecap="round"
          d="M17.97 20c-.16-2.892-1.045-5-5.97-5s-5.81 2.108-5.97 5"
        ></path>
      </g>
    </svg>
  );
}

export default UserRoundedIcon;
