import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer, RealHeader } from "./components";

import styled from "styled-components";
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
  AuthWrapper,
} from "./pages";
import AddUser from "./CrudOperation/AddUser";
import AddCar from "./CrudOperation/AddCar";
import EditUser from "./CrudOperation/EditUser";
import { TableUsers } from "./CrudOperation/TableUsers";
import { TableCars } from "./CrudOperation/TableCars";
import { ListCars } from "./CrudOperation/ListCars";
import {ListCustomerSev} from "./CrudOperation/ListCustomerSev"

import { CarUpdateForm } from "./CrudOperation/CarUpdateForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>

        <Route exact path="/cars">
          <ListCars /> // add ListCars component
        </Route>
        <Route exact path="/listc">
          <ListCustomerSev /> // add ListCars component
        </Route>

        <Route exact path="/cars/update/:id" component={CarUpdateForm} />

        <Route exact path="/products/:id" children={<SingleProduct />} />

        <Route exact path="/checkout">
          <Checkout />
        </Route>

        <Route path="*">
          <Error />
        </Route>
      </Switch>

      <Footer></Footer>
    </Router>
  );
}

export default App;
