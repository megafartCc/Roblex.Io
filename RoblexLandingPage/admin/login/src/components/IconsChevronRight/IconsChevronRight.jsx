/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const IconsChevronRight = ({
  className,
  iconsChevronRight = "https://c.animaapp.com/1sunRxfK/img/icons-chevron-right.svg",
}) => {
  return (
    <img
      className={`absolute top-0 left-0 w-5 h-5 ${className}`}
      alt="Icons chevron right"
      src={iconsChevronRight}
    />
  );
};
