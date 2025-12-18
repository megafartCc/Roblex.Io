import React, { useEffect } from "react";
import { Error } from "../Error";

export const Notification = ({ className, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`flex w-[377px] items-center gap-3 p-3 bg-collection-1-impr-default rounded-xl border border-solid border-collection-1-stroke shadow-[0px_4px_16px_#1111110a] animate-slide-in ${className}`}
      style={{
        animation: 'slideIn 0.3s ease-out'
      }}
    >
      <div className="inline-flex items-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-[#ff252526] rounded-lg border border-solid border-[#ff2525]">
        <Error className="!relative !w-6 !h-6" color="#FF2525" />
      </div>

      <div className="flex flex-col items-start gap-1 relative flex-1 grow">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-collection-1-glyphs-title text-xl tracking-[-0.60px] leading-5 whitespace-nowrap">
          Authorization Error
        </div>

        <div className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-collection-1-glyphs-body text-xs tracking-[-0.36px] leading-3">
          {message}
        </div>
      </div>

      <button
        onClick={onClose}
        className="flex-shrink-0 text-collection-1-glyphs-body hover:text-collection-1-glyphs-title transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};
