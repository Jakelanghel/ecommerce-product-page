import React from "react";
import { StyledProductDetails } from "./styled/ProductDetails.Styled";
import Carousel from "./Carousel";

const ProductDetails = () => {
  return (
    <StyledProductDetails>
      <Carousel />
      <div className="container-details">
        <p className="brand">sneaker company</p>
        <h1 className="product-name">fall limited edition sneakers</h1>
        <p className="product-description">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
      </div>

      <div className="container-price">
        <div className="container-discount">
          <p className="current-price">$125.00</p>
          <p className="discount">50%</p>
        </div>

        <p className="og-price">$250.00</p>
      </div>
    </StyledProductDetails>
  );
};

export default ProductDetails;
