/*
|--------------------------------------------------------------------------
| main.jsx
|--------------------------------------------------------------------------
|
| This is the entry point of the React application.
|
| React starts execution from this file.
|
| Responsibilities:
| 1. Import global CSS
| 2. Create the React root
| 3. Render the App component
|
*/

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./styles/global.css";

// Create the root element and render the application.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);