
import React from "react";
import { cn } from "@/lib/utils";

interface ComingSoonLogoProps {
  className?: string;
}

const ComingSoonLogo: React.FC<ComingSoonLogoProps> = ({ className }) => {
  return (
    <div className={cn("text-center", className)}>
      <h1 className="font-space-grotesk font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight mb-2 text-creinum-orange animate-pulse-slow relative">
        CREINUM
        <div className="absolute inset-0 bg-creinum-orange/10 blur-xl -z-10 scale-110 animate-pulse-slow"></div>
      </h1>
      <div className="w-16 h-1 bg-creinum-orange/50 mx-auto rounded-full mt-3 animate-fade-in"></div>
    </div>
  );
};

export default ComingSoonLogo;
