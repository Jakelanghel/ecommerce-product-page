import React from "react";
import { Context } from "../Context";
import images from "../constants/images";
import { StyledLightBox } from "./styled/LightBox.Styled";

export const LightBox = () => {
  const {
    productImgArr,
    carouselCount,
    nextImg,
    prevImg,
    getImg,
    toggleLightBox,
  } = React.useContext(Context);
  return (
    <StyledLightBox>
      <div className="container-img">
        <img
          src={images.closeIcon}
          alt=""
          className="close-icon"
          onClick={toggleLightBox}
        />

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

        <div className="mobile-selector">
          <button className="mobile-sel-btn" onClick={prevImg}>
            <img src={images.prevIcon} alt="prev-img" />
          </button>
          <button className="mobile-sel-btn" onClick={nextImg}>
            <img src={images.nextIcon} alt="next-img" />
          </button>
        </div>
      </div>
    </StyledLightBox>
  );
};

export default LightBox;
