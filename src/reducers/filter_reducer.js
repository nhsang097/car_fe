import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p.price);
    // console.log(maxPrice);
    maxPrice = Math.max(...maxPrice);
    // console.log(maxPrice);

    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;

    //Why don't we let it equal to [emptyArray] ? Because in case nothing matches. I still want to have something to show.
    let tempProducts = [...filtered_products];
    if (sort === "price-lowest") {
      // tempProducts = tempProducts.sort((a, b) => {
      //   if (a.price < b.price) {
      //     return -1;
      //   }
      //   if (a.price > b.price) {
      //     return 1;
      //   }
      //   return 0;
      // });

      //ALTERNATIVE WAY, EASIER TO READ
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-highest") {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }

    if (sort === "name-a") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === "name-z") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }

    return { ...state, filtered_products: tempProducts };
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }

  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text, category, company, color, price, shipping } = state.filters;

    //ALWAYS WANT TO START WITH FRESH DATA,
    //IF I USE filteredProducts here, at some point, I will run out of products to filter
    let tempProducts = [...all_products];

    //Start filtering base on Filter in state:
    if (text) {
      tempProducts = tempProducts.filter((product) => {
        // return product.name.toLowerCase().startsWith(text);
        return product.name.toLowerCase().includes(text);
      });
    }

    // category
    if (category !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
    }

    // company
    if (company !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.company === company
      );
    }

    // price
    tempProducts = tempProducts.filter((product) => product.price <= price);
    // shipping
    if (shipping) {
      tempProducts = tempProducts.filter(
        (product) => product.shipping === true
      );
    }

    // colors
    if (color !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.colors.find((c) => c === color);
      });

    }

    return {...state,filtered_products:tempProducts};
  }


  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
