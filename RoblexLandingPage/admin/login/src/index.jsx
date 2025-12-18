import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Dark } from "./screens/Dark";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Dark />
  </StrictMode>,
);
