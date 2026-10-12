import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  children,
  icon,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-bold rounded-full transition-all duration-200 cursor-pointer text-center select-none active:scale-95 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm tracking-wide",
    lg: "px-8 py-3.5 text-base tracking-wider",
  };

  const variantStyles = {
    primary:
      "bg-[var(--gold)] text-[#17210f] hover:brightness-105 hover:shadow-md hover:-translate-y-0.5",
    outline:
      "bg-transparent text-[var(--ink)] border border-[var(--gold)] hover:bg-[var(--gold)]/10 hover:-translate-y-0.5",
    ghost:
      "bg-transparent text-[var(--ink)] hover:bg-[var(--line)]/50",
    dark:
      "bg-[var(--green)] text-[var(--ong)] border border-[var(--gold)]/30 hover:border-[var(--gold)] hover:-translate-y-0.5 shadow-sm",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {icon && <span className="shrink-0">{icon}</span>}
          <span>{children}</span>
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
