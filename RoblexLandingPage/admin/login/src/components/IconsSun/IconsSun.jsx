/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const IconsSun = ({
  className,
  iconsSun = "https://c.animaapp.com/1sunRxfK/img/icons-sun.svg",
}) => {
  return (
    <img
      className={`absolute top-0 left-0 w-5 h-5 ${className}`}
      alt="Icons sun"
      src={iconsSun}
    />
  );
};
