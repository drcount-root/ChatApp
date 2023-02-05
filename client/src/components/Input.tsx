import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from "react";

export const Input = forwardRef<
  HTMLInputElement,
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
>(({ className, ...rest }, ref) => {
  return (
    <input
      className={`py-1 px-2 border-gray-400 focus:bg-blue-100 outline-transparent rounded w-full shadow-inner ${className}`}
      {...rest}
      ref={ref}
    />
  );
});
