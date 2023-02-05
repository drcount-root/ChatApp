import { DetailedHTMLProps, forwardRef, ButtonHTMLAttributes } from "react";

export const Button = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>(({ className, children, ...rest }, ref) => {
  return (
    <button
      className={`bg-pink-700 text-white bg-opacity-100 rounded p-2 w-full font-bold hover:bg-blue-400 focus:bg-blue-400 animate-pulse disabled:bg-gray-500 transition-colors delay-75 ${className}`}
      {...rest}
      ref={ref}
    >
      {children}
    </button>
  );
});
