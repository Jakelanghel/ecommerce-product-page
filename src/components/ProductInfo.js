import React from "react";
import { StyledProdInfo } from "./styled/ProductInfo.Styled";
import CartActions from "../components/CartActions";

export const ProductInfo = () => {
  const ogPrice = "250.00";
  const discountPrice = "125.00";
  const discount = 50;
  return (
    <StyledProdInfo>
      <h2>sneaker company</h2>
      <h1>fall limited edition sneakers</h1>
      <p className="prod-copy">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div className="container-price">
        <p className="price">
          ${discountPrice} <span>{`${discount}%`}</span>
        </p>
        <p className="og-price">${ogPrice}</p>
      </div>
      <CartActions />
    </StyledProdInfo>
  );
};

export default ProductInfo;
