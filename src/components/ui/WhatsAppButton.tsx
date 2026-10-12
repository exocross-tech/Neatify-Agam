import React from "react";
import { Button } from "./Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { MessageSquare } from "lucide-react";

interface WhatsAppButtonProps {
  text?: string;
  message?: string;
  variant?: "primary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  text = "Get a Quote on WhatsApp",
  message,
  variant = "primary",
  size = "md",
  className,
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      href={getWhatsAppUrl(message)}
      isExternal
      icon={<MessageSquare className="w-4 h-4" />}
      className={className}
    >
      {text}
    </Button>
  );
};
