import React from "react";
import images from "../constants/images";
import { StyledCartActions } from "./styled/CartActions.Styled";
import { Context } from "../Context";

export const CartActions = () => {
  const { productQuantity, addQuantity, subQuantity, addToCart } =
    React.useContext(Context);

  return (
    <StyledCartActions>
      <div className="container-quantity">
        <button className="quantity-btn" onClick={subQuantity}>
          <img src={images.minusIcon} alt="subtract quantity" />
        </button>
        <p className="quantity">{productQuantity}</p>
        <button className="quantity-btn" onClick={addQuantity}>
          <img src={images.plusIcon} alt="add quantity" />
        </button>
      </div>
      <button className="add-to-cart" onClick={addToCart}>
        <img src={images.cartIcon} alt="" /> Add to Cart
      </button>
    </StyledCartActions>
  );
};

export default CartActions;
