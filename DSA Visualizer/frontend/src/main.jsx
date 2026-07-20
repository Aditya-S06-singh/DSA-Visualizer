/*
|--------------------------------------------------------------------------
| main.jsx
|--------------------------------------------------------------------------
|
| This is the entry point of our React application.
|
| Think of this file as the "starting point" of the website.
| It loads the App component and attaches it to the HTML page.
|
| The <div id="root"></div> inside index.html is where our
| entire React application will be displayed.
|
*/

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";

// Create the root of our React application and render App.jsx
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);