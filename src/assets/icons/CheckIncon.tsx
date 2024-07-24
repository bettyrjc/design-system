
type IconProps = {
  className: string;
}
const CheckIncon = ({ className }: IconProps) => {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width={"2"} stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default CheckIncon