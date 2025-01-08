import React from "react";
import ReactDOM from "react-dom/client";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';
import App from "./App";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";


const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 8000,
  offset: '30px',
  transition: transitions.SCALE
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
      <Analytics />
      <App />
    </AlertProvider>
  </React.StrictMode>
);
