import React from "react";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & { className?: string }
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-viettel-500 ${className}`}
    {...props}
  />
));
Textarea.displayName = "Textarea";
export { Textarea };
