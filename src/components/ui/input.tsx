import React from "react";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & { className?: string }
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-viettel-500 ${className}`}
    {...props}
  />
));
Input.displayName = "Input";

export { Input };
