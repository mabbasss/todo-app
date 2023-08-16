import * as React from "react";
import ReactDOM from "react-dom/client";
import { initializeIcons } from "@fluentui/react";
import {App} from "./App";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


initializeIcons();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div>
    <App />
    </div>
  </React.StrictMode>,
);

