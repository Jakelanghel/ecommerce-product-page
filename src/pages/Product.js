import React from "react";

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
    </>
  );
};

export default Product;
