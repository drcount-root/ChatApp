import { DetailedHTMLProps, forwardRef, ButtonHTMLAttributes } from "react";

export const Button = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>(({ className, children, ...rest }, ref) => {
  return (
    <button
      className={`bg-slate-200 text-slate-900 rounded p-2 w-full font-bold hover:bg-blue-200 delay-100 focus:bg-blue-200 disabled:bg-gray-500 ${className}`}
      {...rest}
      ref={ref}
    >
      {children}
    </button>
  );
});
