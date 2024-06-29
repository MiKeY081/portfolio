import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//setting up axios baseUrl and credentials
axios.defaults.baseURL = "https://portfolio-czaw.vercel.app/api/v1";
axios.defaults.withCredentials = true;

https: ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ToastContainer />
    <App />
  </BrowserRouter>
);
