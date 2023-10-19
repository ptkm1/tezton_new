import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ReactFlowProvider } from "reactflow";
import "reactflow/dist/style.css";
import GlobalProvider from "./contexts/global-context.tsx";
import "./index.css";
import { router } from "./router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalProvider>
      <ReactFlowProvider>
        <RouterProvider router={router} />
      </ReactFlowProvider>
    </GlobalProvider>
  </React.StrictMode>
);
