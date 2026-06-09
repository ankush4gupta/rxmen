import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center font-sans font-medium transition-all duration-200 rounded-full",
        {
          "bg-orange-bright text-white hover:bg-orange shadow-md hover:shadow-lg active:scale-95":
            variant === "primary",
          "border border-navy/30 text-navy hover:bg-navy hover:text-cream":
            variant === "outline",
          "text-navy/70 hover:text-navy": variant === "ghost",
        },
        {
          "px-3 py-1.5 text-xs": size === "sm",
          "px-5 py-2.5 text-sm": size === "md",
          "px-7 py-3.5 text-base": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
