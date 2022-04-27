import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  padding: 1rem;
  padding-left: 0;
  justify-content: space-between;
  position: relative;

  .desktop-nav-list {
    display: none;
  }

  .flex {
    display: flex;
    align-items: center;
  }

  .menu-btn {
    border: none;
    background-color: transparent;
    padding: 1rem 1.5rem;
    display: flex;
  }

  .avatar-img {
    width: 35px;
    margin-left: 1.5rem;
  }

  .cart-quantity {
    font-size: 0.5rem;
    font-weight: 700;
    padding: 0 6px;
    border-radius: 40%;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.orange};
    position: absolute;
    top: 21px;
    right: 77px;
  }

  .cart-btn {
    border: none;
    background-color: transparent;
  }

  @media (min-width: 900px) {
    width: 80%;
    position: static;
    padding: 2rem 0;
    border-bottom: solid 1px ${({ theme }) => theme.colors.lightGray};
    margin: 0 auto;
    .desktop-nav-list {
      width: 60%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    .nav-link {
      color: ${({ theme }) => theme.colors.darkGrayishBlue};
      text-transform: capitalize;
      text-decoration: none;
      margin-right: 1.5rem;
    }

    .menu-btn {
      padding: 0;
      display: none;
    }

    .menu-img {
      display: none;
    }
  }
`;
