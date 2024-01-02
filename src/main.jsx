import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import firebaseConfig from "./firebaseConfig.js"; // Import your Firebase configuration

import { initializeApp } from "firebase/app";

//Initialize Firebase
initializeApp(firebaseConfig);
//const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//Lägga tillbaka alla bilder/ikoner i public
//Fixa typeerror: e.map is not a function
