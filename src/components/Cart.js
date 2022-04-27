import React from "react";
import { StyledCart } from "./styled/Cart.Styled";

const Cart = (props) => {
  const total = props.ogPrice * props.quantity;
  return (
    <StyledCart>
      <h2>Cart</h2>
      <div className="container-cart">
        <img
          src="./images/image-product-1-thumbnail.jpg"
          alt="shoes"
          className="thumbnail"
        />
        <div className="details">
          <p className="description">{props.description}</p>
          <p className="total">
            {`$${props.ogPrice}.00 X ${props.quantity} `}
            <span>{`$${total}.00`}</span>
          </p>
        </div>

        <button className="delete-btn" onClick={props.removeItem}>
          <img src="./images/icon-delete.svg" alt="delete cart item" />
        </button>
      </div>

      <button className="checkout-btn">Checkout</button>
    </StyledCart>
  );
};

export default Cart;
