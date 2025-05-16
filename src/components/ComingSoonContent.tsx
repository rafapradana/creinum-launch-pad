
import React from "react";

const ComingSoonContent: React.FC = () => {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <p className="text-creinum-orange text-lg md:text-xl mb-10 animate-fade-in opacity-90">
        We're a group of young developers, designers, and creators building cool stuff together.
      </p>
      
      <div className="relative my-16">
        <h2 className="text-creinum-orange text-2xl md:text-3xl lg:text-4xl font-medium animate-pulse-slow">
          Coming Soon
        </h2>
        <div className="absolute w-32 h-1 bg-creinum-orange/30 bottom-0 left-1/2 transform -translate-x-1/2 -mb-2 rounded-full"></div>
      </div>
    </div>
  );
};

export default ComingSoonContent;
