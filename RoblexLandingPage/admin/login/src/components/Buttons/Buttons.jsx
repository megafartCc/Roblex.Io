/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";

export const Buttons = ({
  stateProp,
  priority,
  icon,
  className,
  text = "Continue",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",

    priority: priority || "primary",

    icon: icon || "off",
  });

  return (
    <button
      className={`all-[unset] box-border border-collection-1-buttons-stroke flex items-start p-4 relative w-[245px] rounded-xl gap-1.5 border border-solid left-5 justify-center ${state.state === "hover" ? "top-[78px]" : "top-5"} ${state.state === "hover" ? "bg-collection-1-buttons-primary-hover" : "bg-collection-1-buttons-primary-default"} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div className="[font-family:'Inter',Helvetica] w-fit mt-[-1.00px] tracking-[-0.60px] text-xl text-collection-1-buttons-glyphs font-medium leading-5 whitespace-nowrap relative">
        {text}
      </div>
    </button>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}
