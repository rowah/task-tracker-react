//the entry point of React
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; //from appjs which contains the root app components
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
//inserts out App into the div (entry point to our app on the html)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
