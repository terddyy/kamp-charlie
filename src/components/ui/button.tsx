import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-md hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md hover:shadow-lg hover:-translate-y-0.5",
        outline: "border border-border bg-surface hover:bg-surface-hover hover:border-primary/30 shadow-sm hover:shadow-md hover:-translate-y-0.5",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover shadow-md hover:shadow-lg hover:-translate-y-0.5",
        tertiary: "bg-tertiary text-tertiary-foreground hover:bg-tertiary-hover shadow-md hover:shadow-lg hover:-translate-y-0.5",
        accent: "bg-accent text-accent-foreground hover:bg-accent-hover shadow-md hover:shadow-glow-accent hover:-translate-y-0.5",
        ghost: "hover:bg-surface hover:text-foreground hover:-translate-y-0.5",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary-hover",
        premium: "btn-premium text-primary-foreground px-6 py-3 text-base font-bold shadow-lg",
        glass: "glass hover:backdrop-blur-xl border-border/30 hover:border-primary/20 shadow-lg hover:shadow-xl hover:-translate-y-1",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-13 rounded-xl px-8 py-3 text-base",
        xl: "h-16 rounded-xl px-10 py-4 text-lg font-bold",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
