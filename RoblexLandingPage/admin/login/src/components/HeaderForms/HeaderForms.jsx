/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { ButtonsHeaderForms } from "../ButtonsHeaderForms";
import { IconsX } from "../IconsX";

export const HeaderForms = ({
  property1,
  button,
  className,
  buttonsHeaderForms = (
    <IconsX
      className="!h-6 !relative !left-[unset] !w-6 !top-[unset]"
      iconsX="https://c.animaapp.com/1sunRxfK/img/icons-x.svg"
    />
  ),
}) => {
  return (
    <div
      className={`flex w-[419px] h-20 items-center justify-between p-6 relative top-[119px] left-5 bg-collection-1-sub-default border-b [border-bottom-style:solid] border-collection-1-stroke ${className}`}
    >
      <div className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-collection-1-glyphs-title text-[28px] tracking-[-0.84px] leading-7 whitespace-nowrap">
        Login
      </div>

      <ButtonsHeaderForms
        className="!left-[unset] !top-[unset]"
        override={buttonsHeaderForms}
        stateProp="default"
      />
    </div>
  );
};
