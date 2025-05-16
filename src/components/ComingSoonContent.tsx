import React from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
const ComingSoonContent: React.FC = () => {
  return <div className="text-center max-w-2xl mx-auto">
      <p className="text-creinum-orange/90 text-lg md:text-xl mb-12 animate-fade-in font-medium leading-relaxed">
        We're a group of young developers, designers, and creators building cool stuff together.
      </p>
      
      <div className="relative my-16 group cursor-pointer">
        <h2 className="text-creinum-orange text-3xl md:text-4xl lg:text-5xl font-bold relative inline-block">
          Coming Soon
          <Sparkles className="absolute -top-6 -right-8 text-creinum-orange/70 animate-pulse-slow" />
        </h2>
        
        <div className="h-1 bg-gradient-to-r from-transparent via-creinum-orange to-transparent w-full mt-3 transform transition-all duration-300 group-hover:scale-x-110"></div>
        
        <div className="mt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          
        </div>
      </div>
    </div>;
};
export default ComingSoonContent;