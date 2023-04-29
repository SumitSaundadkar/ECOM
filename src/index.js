import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { CartContextProvider } from "../src/context/cartContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </StrictMode>
);
