/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";

export const Inputs = ({
  stateProp,
  icon,
  className,
  text = "Password",
  type = "text",
  value,
  onChange,
  placeholder,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
    icon: icon || false,
  });

  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div
      className={`border-collection-1-stroke flex px-4 py-2.5 relative rounded-xl border border-solid h-[52px] ${state.icon ? "items-center" : "items-start"} ${!state.icon ? "flex-col" : ""} ${state.state === "hover" ? "bg-collection-1-background-hover" : "bg-collection-1-background"} ${state.icon ? "justify-between" : "justify-center"} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <input
        type={icon && showPassword ? "text" : type}
        value={value}
        onChange={onChange}
        placeholder={placeholder || text}
        className="[font-family:'Inter',Helvetica] w-full tracking-[-0.60px] text-xl text-collection-1-glyphs-body font-medium leading-5 bg-transparent border-none outline-none"
      />

      {state.icon && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="flex-shrink-0 relative w-5 h-5"
        >
          <img
            src={showPassword ? "https://c.animaapp.com/1sunRxfK/img/icons-eye-slash.svg" : "https://c.animaapp.com/1sunRxfK/img/icons-eye-1.svg"}
            alt="Toggle password visibility"
            className="w-5 h-5"
          />
        </button>
      )}
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
