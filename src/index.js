import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./config/store";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Router />
          <ToastContainer autoClose={5000} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
