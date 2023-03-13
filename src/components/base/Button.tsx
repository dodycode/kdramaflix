import { cva } from "class-variance-authority";

import type { VariantProps } from "class-variance-authority";

const style = cva("transition duration-500 text-lg font-bold rounded-md px-[2rem] py-[0.8rem] flex items-center", {
  variants: {
    intent: {
      primary: "bg-white hover:bg-white/[0.75] text-black",
      secondary: "bg-white bg-opacity-30 hover:bg-opacity-20 text-white"
    }
  },
  defaultVariants: {
    intent: "primary"
  }
});

export type ButtonTheme = VariantProps<typeof style>;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonTheme["intent"];
}

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", ...props }) => {
  return (
    <button
      className={style({intent: variant})}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
