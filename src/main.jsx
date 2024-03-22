import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import firebaseConfig from "./firebaseConfig.js"; // Import your Firebase configuration
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";

//Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
