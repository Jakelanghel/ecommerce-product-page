import React from "react";
import { StyledCarousel } from "./styled/Carousel.Styled";

function Carousel() {
  return (
    <StyledCarousel>
      <img
        src="./images/image-product-1.jpg"
        alt="a pair of shoes"
        className="carousel-img"
      />
      <div className="carousel-actions">
        <button className="carousel-btn">
          <img
            src="./images/icon-previous.svg"
            alt="carousel back button"
            className="car-btn-img"
          />
        </button>
        <button className="carousel-btn">
          <img
            src="./images/icon-next.svg"
            alt="carousel back button"
            className="car-btn-img"
          />
        </button>
      </div>
    </StyledCarousel>
  );
}

export default Carousel;
