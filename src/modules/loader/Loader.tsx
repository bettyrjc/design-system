import { LoaderCircle } from "lucide-react";

export const Loader = ({ label = 'Cargando' }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full my-12">
      <LoaderCircle size={40} className="w-10 h-10 mb-4 animate-spin text-primary" />
      <span className="text-xs">{label}...</span>
    </div>
  );
};