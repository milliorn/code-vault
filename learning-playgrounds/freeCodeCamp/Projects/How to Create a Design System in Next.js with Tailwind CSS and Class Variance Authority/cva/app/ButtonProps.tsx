import { VariantProps } from "class-variance-authority";
import { buttonStyles } from "./Button";

export interface ButtonProps extends VariantProps<typeof buttonStyles> {
  text: string;
}
