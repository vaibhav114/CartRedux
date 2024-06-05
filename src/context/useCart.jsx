import { createContext, useContext, useReducer } from "react";
import cartItems from "../data";
import { cartReducer } from "../reducer.js/cartReducer";

export const CartContext = createContext();

export const ACTIONS = {
  increase: "INCREASE_ORDER",
  decrease: "DECREASE_ORDER",
  clear: "CLEAR_ORDER",
  remove: "REMOVE_ORDER",
};

export const CartContextProvider = ({ children }) => {
  const cartArray = [...cartItems];
  const initalState = {
    items: cartArray,
    totalItems: 0,
    totalAmt: cartArray.reduce((tot, itm) => {
      return tot + parseInt(itm.price, 10);
    }, 0),
  };

  const [state, dispatch] = useReducer(cartReducer, initalState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default function useCart() {
  return useContext(CartContext);
}
