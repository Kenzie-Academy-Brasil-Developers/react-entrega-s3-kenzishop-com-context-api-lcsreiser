import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Product from "./providers/Product/index";
import Cart from "./providers/Cart/index";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Product>
        <Cart>
          <App />
        </Cart>
      </Product>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
