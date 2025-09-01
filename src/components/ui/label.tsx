import React from "react";

const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement> & { className?: string }
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={`block text-sm font-medium ${className}`}
    {...props}
  />
));
Label.displayName = "Label";

export { Label };
