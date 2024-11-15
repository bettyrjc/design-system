type AlertType = {
    message: string;
    type: 'info' | 'warning' | 'error' | 'success';
};
declare const Alert: ({ message, type, }: AlertType) => import("react/jsx-runtime").JSX.Element;
export default Alert;
