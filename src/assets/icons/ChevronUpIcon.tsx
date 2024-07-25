import React from "react";

type ChevronUpIconProps = {
  className: string;
}
function ChevronUpIcon({ className }: ChevronUpIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <polyline points="18 15 12 9 6 15" /></svg>
  );
}

export default ChevronUpIcon;