import React from "react";
import { StyledNav } from "./styled/Nav.Styled";
import Menu from "./Menu";

const Nav = (props) => {
  return (
    <StyledNav>
      {props.isOpen && <Menu handleClick={props.handleClick} />}

      <div className="flex">
        <button className="menu-btn">
          <img
            src="./images/icon-menu.svg"
            alt="menu"
            className="menu-img"
            onClick={props.handleClick}
          />
        </button>

        <img src="./images/logo.svg" alt="sneakers logo" className="logo" />

        
      </div>

      <div className="desktop-nav-list">
          <a href="#" className="nav-link">
            collections
          </a>
          <a href="#" className="nav-link">
            men
          </a>
          <a href="#" className="nav-link">
            women
          </a>
          <a href="#" className="nav-link">
            about
          </a>
          <a href="#" className="nav-link">
            contact
          </a>
        </div>

      <div className="flex">
        {props.cartQuantity > 0 && (
          <p className="cart-quantity">{props.cartQuantity}</p>
        )}

        <button className="cart-btn" onClick={props.showCart}>
          <img src="./images/icon-cart.svg" alt="cart" />
        </button>

        <img
          src="./images/image-avatar.png"
          alt="avatar"
          className="avatar-img"
        />
      </div>
    </StyledNav>
  );
};

export default Nav;
