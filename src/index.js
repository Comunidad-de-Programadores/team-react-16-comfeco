import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./routes/App";
import firebaseConfig from "./firebase/config";
import { FirebaseAppProvider } from "reactfire";

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseAppProvider>,
  document.getElementById("root")
);
