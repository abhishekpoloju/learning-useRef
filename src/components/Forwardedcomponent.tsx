import React from 'react'
type ForwardedInputProps = {
  placeholder?: string;
};
export const ForwardedInput = React.forwardRef<HTMLInputElement, ForwardedInputProps>(({ placeholder }, ref) => (
  <input ref={ref} placeholder={placeholder} />
));

