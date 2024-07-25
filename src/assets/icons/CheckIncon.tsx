
type IconProps = {
  className: string;
}
const CheckIncon = ({ className }: IconProps) => {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={"2"} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default CheckIncon