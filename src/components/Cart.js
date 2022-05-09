import React from "react";
import { Context } from "../Context";
import FullCart from "./FullCart";
import EmptyCart from "./EmptyCart";

export const Cart = () => {
  const { cartItems } = React.useContext(Context);
  return cartItems === 0 ? <EmptyCart /> : <FullCart />;
};

export default Cart;
