import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client"; //export
import App from "./App"; //export default

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
