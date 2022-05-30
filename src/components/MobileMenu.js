import React from "react";
import images from "../constants/images";
import { StyledMobileMenu } from "./styled/MobileMenu.Styled";
import { Context } from "../Context";

export const MobileMenu = (props) => {
  return (
    <StyledMobileMenu>
      <div className="container-mobile-menu">
        <img
          src={images.closeIcon}
          alt="Close menu"
          className="close-img"
          onClick={props.handleClick}
        />

        <div className="container-menu-links">
          <a href="#Collections">Collections</a>

          <a href="#Men">Men</a>

          <a href="#Women">Women</a>

          <a href="#About">About</a>

          <a href="#Contact">Contact</a>
        </div>
      </div>
    </StyledMobileMenu>
  );
};

export default MobileMenu;
