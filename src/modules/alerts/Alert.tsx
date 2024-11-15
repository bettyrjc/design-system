import clsx from "clsx";
import { BadgeCheck, BadgeInfo, CircleAlert, X } from "lucide-react";

type AlertType = {
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
}
const Alert = ({
  message = "Alert ",
  type = 'info',
}: AlertType) => {

let icon;
switch (type) {
    case 'info':
      icon = <BadgeInfo />
      break;
    case 'warning':
      icon = <CircleAlert />
      break;
    case 'error':
      icon = <X />
      break;
    case 'success':
      icon = <BadgeCheck />
      break;
}
  return (
    <div className={clsx(
      'p-4 rounded-lg text-white flex items-center gap-3 text-xl',
      type === 'info' && 'bg-blue-500',
      type === 'warning' && 'bg-yellow-500',
      type === 'error' && 'bg-danger',
      type === 'success' && 'bg-success',
    )}>

      {icon}
      <p className="m-0">{message}</p>
    </div>
  )
}

export default Alert
