import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  padding-left: 0.5rem;
  position: relative;

  .desktop-menu {
    display: none;
  }

  .menu-icon {
    padding: 1rem;
  }

  .logo {
    padding-bottom: 1rem;
  }

  .avatar {
    width: 35px;
    margin-left: 1.5rem;
  }

  .cart-icon {
    margin-bottom: 8px;
  }

  .nav-right {
    position: relative;
  }

  .cart-quantity {
    font-size: 0.6rem;
    font-weight: 700;
    position: absolute;
    top: 0;
    left: 12px;
    background: var(--orange);
    color: var(--white);
    padding: 0.5px 6px;
    border-radius: 8px;
  }

  @media screen and (min-width: 900px) {
    width: 80%;
    padding: 0;
    margin: 0 auto;
    margin-bottom: 5rem;
    border-bottom: solid 1px var(--grey);

    .nav-left {
      display: flex;
    }

    .menu-icon {
      display: none;
    }

    .desktop-menu {
      display: flex;
      margin-top: 5px;
    }

    .logo {
      margin-right: 1rem;
      padding: 2.5rem 0;
      width: 100%;
      height: 100%;
    }

    .nav-link {
      font-size: 0.85rem;
      font-weight: 700;
      text-transform: capitalize;
      text-decoration: none;
      margin-left: 1rem;
      color: var(--darkGrayBlue);
      padding: 2.5rem 0;
      border-bottom: solid 4px var(--white);
    }

    .nav-link:hover {
      border-bottom: solid 4px var(--orange);
      cursor: pointer;
    }

    .cart-icon {
      width: 25px;
    }
    .cart-icon:hover {
      cursor: pointer;
    }

    .avatar {
      width: 45px;
    }

    .avatar:hover {
      border: solid 2px var(--orange);
      border-radius: 50%;
      cursor: pointer;
    }
  }
`;
