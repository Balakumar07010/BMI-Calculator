import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BMI } from "./components/BMI";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BMI />
  </StrictMode>
);
