
import React from "react";
import ComingSoonLogo from "@/components/ComingSoonLogo";
import ComingSoonContent from "@/components/ComingSoonContent";
import ContactInfo from "@/components/ContactInfo";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-creinum-orange/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-creinum-orange/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      
      {/* Content container */}
      <div className="w-full max-w-3xl mx-auto z-10">
        <ComingSoonLogo className="mb-8" />
        <ComingSoonContent />
        <ContactInfo />
      </div>
    </div>
  );
};

export default Index;
