"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  staggerChildren?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  yOffset = 24,
  className,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1.0] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SectionHeading: React.FC<{
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  theme?: "light" | "dark";
}> = ({ eyebrow, title, description, align = "center", className, theme = "light" }) => {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align];

  const eyebrowColor = theme === "dark" ? "text-[var(--gold)]" : "text-[var(--gold)]";
  const titleColor = theme === "dark" ? "text-[var(--ong)]" : "text-[var(--ink)]";
  const descColor = theme === "dark" ? "text-[var(--ong)]/80" : "text-[var(--mute)]";

  return (
    <div className={cn("max-w-3xl flex flex-col mb-12 sm:mb-16", alignClass, className)}>
      {eyebrow && (
        <span
          className={cn(
            "text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-2",
            eyebrowColor
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-serif-heading font-bold tracking-tight mb-4",
          titleColor
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("text-base sm:text-lg leading-relaxed max-w-2xl", descColor)}>
          {description}
        </p>
      )}
    </div>
  );
};
