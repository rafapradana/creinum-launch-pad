
import React from "react";
import { cn } from "@/lib/utils";

interface ComingSoonLogoProps {
  className?: string;
}

const ComingSoonLogo: React.FC<ComingSoonLogoProps> = ({ className }) => {
  return (
    <div className={cn("text-center", className)}>
      <h1 className="font-space-grotesk font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight mb-2 text-creinum-orange animate-fade-in">
        CREINUM
      </h1>
    </div>
  );
};

export default ComingSoonLogo;
