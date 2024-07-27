import { cva } from "class-variance-authority";
import { ButtonProps } from "./ButtonProps";

export const buttonStyles = cva("rounded-3xl py-2 text-white w-80 font-sm", {
  variants: { 
    intent: { 
      primary: "bg-blue-600", 
      secondary: "bg-gray-600",
      danger: "bg-red-600",
    },
    defaultVariants: {
      intent: "primary",
    },
  },
}); 

export function Button({ intent, text, ...props }: ButtonProps) {
  return (
    <button className={buttonStyles({ intent })} {...props}> 
      {text}
    </button>
  );
}
