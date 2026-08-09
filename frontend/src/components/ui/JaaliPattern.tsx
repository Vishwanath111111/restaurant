import React from "react";

interface JaaliPatternProps {
  className?: string;
}

export const JaaliPattern: React.FC<JaaliPatternProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center my-6 gap-3 ${className}`}>
      <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-[#D4AF37]" />
      <div className="w-4 h-4 rotate-45 border border-[#D4AF37] flex items-center justify-center">
        <div className="w-1.5 h-1.5 bg-[#D4AF37]" />
      </div>
      <svg className="w-6 h-6 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L15 8L21 9L16.5 13.5L18 19.5L12 16L6 19.5L7.5 13.5L3 9L9 8L12 2Z" fill="currentColor" fillOpacity="0.2" />
      </svg>
      <div className="w-4 h-4 rotate-45 border border-[#D4AF37] flex items-center justify-center">
        <div className="w-1.5 h-1.5 bg-[#D4AF37]" />
      </div>
      <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-[#D4AF37]" />
    </div>
  );
};
