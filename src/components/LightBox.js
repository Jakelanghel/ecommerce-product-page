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
    thumbImgs,
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
          <div className="thumb-container">
            <img
              src={thumbImgs[0].url}
              alt="a different view of product"
              className={
                carouselCount === thumbImgs[0].id
                  ? "thumbnail selected"
                  : "thumbnail"
              }
              id="0"
              onClick={getImg}
            />
          </div>

          <div className="thumb-container">
            <img
              src={images.prodThumb_2}
              alt="a different view of product"
              className={
                carouselCount === thumbImgs[1].id
                  ? "thumbnail selected"
                  : "thumbnail"
              }
              id="1"
              onClick={getImg}
            />
          </div>

          <div className="thumb-container">
            <img
              src={images.prodThumb_3}
              alt="a different view of product"
              className={
                carouselCount === thumbImgs[2].id
                  ? "thumbnail selected"
                  : "thumbnail"
              }
              id="2"
              onClick={getImg}
            />
          </div>

          <div className="thumb-container">
            <img
              src={images.prodThumb_4}
              alt="a different view of product"
              className={
                carouselCount === thumbImgs[3].id
                  ? "thumbnail selected"
                  : "thumbnail"
              }
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
      </div>
    </StyledLightBox>
  );
};

export default LightBox;
