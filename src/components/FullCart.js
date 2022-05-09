import React from "react";
import { Context } from "../Context";
import images from "../constants/images";
import { StyledCart } from "./styled/Cart.Styled";

export const FullCart = () => {
  const { cartItems, emptyCart } = React.useContext(Context);
  const price = 125;
  const quantity = cartItems;
  const total = price * quantity;
  return (
    <StyledCart>
      <h3>Cart</h3>
      <div className="container-cart-item">
        <img src={images.prodThumb_1} alt="shoes" className="thumb" />

        <div className="item-details">
          <p className="item-des">Autumn Limited Edition...</p>
          <p className="item-price">
            {`${price}.00 x ${quantity} `}
            <span>{total > 0 ? `$${total}.00` : "$0.00"}</span>
          </p>
        </div>

        <img
          src={images.deleteIcon}
          alt="delete cart item"
          className="delete-icon"
          onClick={emptyCart}
        />
      </div>
      <button className="checkout">Checkout</button>
    </StyledCart>
  );
};

export default FullCart;
