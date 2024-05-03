import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";
import "./index.css";

import { ThemeProvider } from "@mui/material";
import theme from "./library/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </React.StrictMode>,
);
