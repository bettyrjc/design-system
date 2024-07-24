
type IconProps = { //TODO: change this to a global component
  className: string;
  strokeWidth?: string;
}
const CheckIncon = ({ className, strokeWidth = "2" }: IconProps) => {
  return (
    <svg className={className} fill="none"  viewBox="0 0 24 24"  stroke="currentColor" stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"> 
     <polyline points="20 6 9 17 4 12" />
     </svg>
  )
}

export default CheckIncon