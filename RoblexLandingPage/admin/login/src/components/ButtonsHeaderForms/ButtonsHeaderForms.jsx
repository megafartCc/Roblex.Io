/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";
import { IconsX } from "../IconsX";

export const ButtonsHeaderForms = ({
  stateProp,
  className,
  override = (
    <IconsX
      className="!h-6 !relative !left-[unset] !w-6 !top-[unset]"
      iconsX="https://c.animaapp.com/1sunRxfK/img/icons-x-1.svg"
    />
  ),
}) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });

  return (
    <div
      className={`flex items-center top-5 p-1 relative w-8 rounded-md gap-2.5 h-8 justify-center ${state.state === "hover" ? "border-collection-1-stroke" : ""} ${state.state === "hover" ? "bg-collection-1-sub-hover" : "bg-collection-1-sub-default"} ${state.state === "hover" ? "border border-solid" : ""} ${state.state === "hover" ? "left-[58px]" : "left-5"} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {override}
    </div>
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
