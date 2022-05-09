import React, { useState } from "react";
import images from "../constants/images";
import { StyledNav } from "./styled/Nav.Styled";
import { Context } from "../Context";
import MobileMenu from "../components/MobileMenu";

const Nav = () => {
  const { navIsOpen, toggleNav, cartItems, toggleCart } =
    React.useContext(Context);
  return (
    <StyledNav>
      <div className="nav-left">
        <img
          src={images.menuIcon}
          alt="menu icon"
          className="menu-icon"
          onClick={toggleNav}
        />
        <img src={images.logo} alt="logo" className="logo" />

        <div className="desktop-menu">
          <a href="collections" className="nav-link">
            Collections
          </a>
          <a href="men" className="nav-link">
            men
          </a>
          <a href="women" className="nav-link">
            women
          </a>
          <a href="about" className="nav-link">
            about
          </a>
          <a href="contact" className="nav-link">
            contact
          </a>
        </div>
      </div>

      <div className="nav-right">
        <img
          src={images.cartIcon}
          alt="cart"
          className="cart-icon"
          onClick={toggleCart}
        />
        <img src={images.avatar} alt="avatar" className="avatar" />
        {cartItems > 0 && <p className="cart-quantity">{cartItems}</p>}
      </div>
      {navIsOpen && <MobileMenu handleClick={toggleNav} />}
    </StyledNav>
  );
};

export default Nav;
