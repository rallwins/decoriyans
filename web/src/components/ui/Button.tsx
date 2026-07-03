import { cn } from "@/lib/cn";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "inverse"
  | "outline-inverse"
  | "success";

export type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-500 text-white hover:bg-brand-600 shadow-sm hover:shadow-md disabled:hover:bg-brand-500",
  secondary:
    "bg-brand-100 text-brand-800 hover:bg-brand-200 disabled:hover:bg-brand-100",
  outline:
    "border-2 border-brand-500 text-brand-600 hover:bg-brand-50 disabled:hover:bg-transparent",
  ghost: "text-earth-700 hover:bg-earth-100 disabled:hover:bg-transparent",
  inverse:
    "bg-white text-brand-700 hover:bg-brand-100 shadow-lg hover:shadow-xl disabled:hover:bg-white",
  "outline-inverse":
    "border-2 border-white text-white hover:bg-white/20 disabled:hover:bg-transparent",
  success:
    "bg-green-500 text-white hover:bg-green-600 shadow-sm disabled:hover:bg-green-500",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3.5 text-lg",
};

interface ButtonVariantOptions {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

export function buttonVariants({
  variant = "primary",
  size = "md",
  className,
}: ButtonVariantOptions = {}) {
  return cn(
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
    variantStyles[variant],
    sizeStyles[size],
    className
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonVariants({ variant, size, className })} {...props}>
      {children}
    </button>
  );
}
