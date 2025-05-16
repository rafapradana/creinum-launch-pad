
import React from "react";
import ComingSoonLogo from "@/components/ComingSoonLogo";
import ComingSoonContent from "@/components/ComingSoonContent";
import ContactInfo from "@/components/ContactInfo";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-white">
      <div className="w-full max-w-3xl mx-auto">
        <ComingSoonLogo className="mb-6" />
        <ComingSoonContent />
        <ContactInfo />
      </div>
    </div>
  );
};

export default Index;
