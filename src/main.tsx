import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LinkInBio } from "./LinkInBio";
import "./styles.css";

const root = document.getElementById("root");
if (!root) throw new Error("#root is missing from index.html");

createRoot(root).render(
  <StrictMode>
    <LinkInBio />
  </StrictMode>,
);
