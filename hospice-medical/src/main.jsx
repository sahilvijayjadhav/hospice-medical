import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


const element = document.querySelector("#root");
const root = createRoot(element)

root.render(<App/>)