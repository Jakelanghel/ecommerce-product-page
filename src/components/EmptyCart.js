import React from "react";
import { StyledCart } from "./styled/Cart.Styled";

export const EmptyCart = () => {
  return (
    <StyledCart>
      <h3>Cart</h3>
      <p className="empty-msg">Your cart is empty.</p>
    </StyledCart>
  );
};

export default EmptyCart;
