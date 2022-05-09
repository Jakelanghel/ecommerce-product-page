import React from "react";
// import CartActions from "../components/CartActions";

import ProductImg from "../components/ProductImg";
import ProductInfo from "../components/ProductInfo";
import { StyledProductContainer } from "../components/styled/ProductContainer.Styled";
export const Product = () => {
  return (
    <>
      <StyledProductContainer>
        <ProductImg />
        <ProductInfo />
      </StyledProductContainer>
      {/* <CartActions /> */}
    </>
  );
};

export default Product;
