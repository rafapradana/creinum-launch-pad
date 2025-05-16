
import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <div className="text-creinum-orange/80 text-center mt-16 md:mt-24">
      <p className="text-sm md:text-base mb-1">Domain Owner:</p>
      <p className="text-sm md:text-base font-medium">M. Rafa S. Pradana</p>
      <a 
        href="mailto:rafapradana.com@gmail.com" 
        className="text-sm md:text-base block mt-1 hover:underline transition-colors"
      >
        rafapradana.com@gmail.com
      </a>
    </div>
  );
};

export default ContactInfo;
