import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MyProvider from "./Context.jsx";

createRoot(document.getElementById("root")).render(
    // App componentimizni Providerga o'rab oldik
    <MyProvider>
        <App />
    </MyProvider>

);
