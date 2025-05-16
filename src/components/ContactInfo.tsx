import React from "react";
import { Card, CardContent } from "@/components/ui/card";
const ContactInfo: React.FC = () => {
  return <div className="mt-16 md:mt-24 animate-fade-in">
      <Card className="bg-white border border-creinum-orange/20 shadow-lg shadow-creinum-orange/5 overflow-hidden group hover:shadow-creinum-orange/10 hover:shadow-xl transition-all duration-300">
        <CardContent className="p-6 bg-zinc-950">
          <div className="text-center">
            <p className="text-creinum-orange/70 text-sm md:text-base mb-1">Domain Owner:</p>
            <p className="text-creinum-orange font-medium text-lg md:text-xl mb-3 transition-transform duration-300 group-hover:scale-105">M. Rafa S. Pradana</p>
            <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-creinum-orange/40 to-transparent my-3"></div>
            <a href="mailto:rafapradana.com@gmail.com" className="text-sm md:text-base block mt-3 text-creinum-orange/80 group-hover:text-creinum-orange transition-colors duration-300 relative inline-block group-hover:underline">
              rafapradana.com@gmail.com
            </a>
          </div>
        </CardContent>
      </Card>
    </div>;
};
export default ContactInfo;