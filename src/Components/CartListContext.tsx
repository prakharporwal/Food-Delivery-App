import { createContext, useContext } from "react";
import { CartItem } from "./CheckoutBox";

let cart: CartItem[] = [];
export const CartListContext = createContext({
  cartList: cart,
  addToCart: (item: CartItem) => {},
  removeFromCart: (item: CartItem) => {},
});

export const useCart = () => useContext(CartListContext);
