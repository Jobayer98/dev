import { Button } from "@/components/ui/button";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const portfolioButtonVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 overflow-hidden group",
  {
    variants: {
      variant: {
        hero: "bg-gradient-primary text-primary-foreground hover:shadow-neon-strong transform hover:scale-105 border-0 px-8 py-3 font-semibold",
        "hero-outline": "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-neon px-8 py-3 font-semibold bg-transparent",
        neon: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-neon transform hover:scale-105",
        glass: "glass-card text-foreground hover:bg-white/20 hover:shadow-neon border-white/20",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm",
        sm: "h-8 sm:h-9 rounded-lg px-2 sm:px-3 text-xs sm:text-sm",
        lg: "h-10 sm:h-11 rounded-lg px-6 sm:px-8 text-sm sm:text-base",
        xl: "h-11 sm:h-12 rounded-xl px-8 sm:px-10 text-sm sm:text-base",
      },
    },
    defaultVariants: {
      variant: "hero",
      size: "default",
    },
  }
);

export interface PortfolioButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "hero" | "hero-outline" | "neon" | "glass" | "ghost";
  size?: "default" | "sm" | "lg" | "xl";
  children: React.ReactNode;
}

const PortfolioButton = ({ 
  className, 
  variant, 
  size, 
  children, 
  ...props 
}: PortfolioButtonProps) => {
  return (
    <button
      className={cn(portfolioButtonVariants({ variant, size, className }))}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === "hero" && (
        <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-smooth" />
      )}
    </button>
  );
};

export { PortfolioButton, portfolioButtonVariants };