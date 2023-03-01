import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min'


import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

//dev-z0zld8n5cwxc67jb.us.auth0.com
//xClUneHZ2mzsUzEDRboDUnKxjgrwfsDd

root.render(
  <Auth0Provider
    domain="dev-z0zld8n5cwxc67jb.us.auth0.com"
    clientId="xClUneHZ2mzsUzEDRboDUnKxjgrwfsDd"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
            
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
