import React from "react";
import images from "../constants/images";
import { StyledProductImg } from "./styled/ProductImg.Styled";
import Cart from "../components/Cart";
import { Context } from "../Context";

export const ProductImg = () => {
  const { productImgArr, carouselCount, nextImg, prevImg, cartIsOpen, getImg } =
    React.useContext(Context);
  return (
    <StyledProductImg>
      <div className="container-img">
        <img
          src={productImgArr[carouselCount]}
          alt="shoes"
          className="main-img"
        />
        <div className="desktop-selector">
          <img
            src={images.prodThumb_1}
            alt="a different view of product"
            className="thumbnail"
            id="0"
            onClick={getImg}
          />
          <img
            src={images.prodThumb_2}
            alt="a different view of product"
            className="thumbnail"
            id="1"
            onClick={getImg}
          />
          <img
            src={images.prodThumb_3}
            alt="a different view of product"
            className="thumbnail"
            id="2"
            onClick={getImg}
          />
          <img
            src={images.prodThumb_4}
            alt="a different view of product"
            className="thumbnail"
            id="3"
            onClick={getImg}
          />
        </div>
      </div>

      <div className="mobile-selector">
        <button className="mobile-sel-btn" onClick={prevImg}>
          <img src={images.prevIcon} alt="prev-img" />
        </button>
        <button className="mobile-sel-btn" onClick={nextImg}>
          <img src={images.nextIcon} alt="next-img" />
        </button>
      </div>
      {cartIsOpen && <Cart />}
    </StyledProductImg>
  );
};

export default ProductImg;
