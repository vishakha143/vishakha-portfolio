import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ProjectsPage } from "./pages/ProjectsPage.jsx";

const Root = window.location.pathname === "/projects" ? ProjectsPage : App;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
