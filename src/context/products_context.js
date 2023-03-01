import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { products_url as url } from "../utils/constants";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";
import { mock_cars } from "../assets/mock_cars";

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //Function open Sidebar:
  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });

    try {
      // const response = await axios.get(url);
      // const products = response.data;

      
      // const products = response.data;
      // const response3= await axios.get('http://localhost:8086/car/');
      // const products = response3.data;
      // const response2 = mock_cars;
      // const products = mock_cars;

      const response3= await axios.get('http://localhost:8080/getAllCars');
      const products = response3.data;
      // console.log(products);
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const fetchSingleProduct = async (url,id) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      // const response = await axios.get(url);
      // const singleProduct = response.data;
      // console.log(singleProduct);
      // const products = mock_cars;
      const response3= await axios.get('http://localhost:8080/getAllCars');
      const products = response3.data;
      

      const singleProduct2 = products.find((p)=>{
        return String(p.id) === id;
      });
      // console.log(singleProduct2);


      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct2 });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
