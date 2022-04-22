import React from "react";
import { StyledCart } from "./styled/Cart.Styled";

const Cart = (props) => {
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
          <p className="description">Autumn Limited Edition...</p>
          {/* <p className="total">{`$${props.ogPrice} x $${props.quantity} ${
            props.ogPrice * props.quantity
          }`}</p> */}
          <p>$125.00 X 3 <span>$375.00</span></p>
        </div>

        <img src="./images/icon-delete.svg" alt="delete cart item" className="delete-btn"/>
      </div>

      <button className="checkout-btn">Checkout</button>
    </StyledCart>
  );
};

export default Cart;
