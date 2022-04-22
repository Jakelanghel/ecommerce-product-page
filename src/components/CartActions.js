import React from "react";
import { StyledCartActions } from "./styled/CartActions.Styled";

const CartActions = (props) => {
  return (
    <StyledCartActions>
      <div className="container-quantity">
        <button className="cart-btn minus" onClick={props.handleSub}>
          -
        </button>
        <p className="count">{props.itemQuantity}</p>
        <button className="cart-btn" onClick={props.handleAdd}>
          +
        </button>
      </div>
      <button className="add-cart-btn" onClick={props.addToCart}>
        <img src="./images/icon-cart.svg" alt="cart" className="cart-img" />
        Add to cart
      </button>
    </StyledCartActions>
  );
};

export default CartActions;
