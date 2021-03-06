import styled from "styled-components";

export const StyledMobileMenu = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;

  .container-mobile-menu {
    background-color: var(--white);
    height: 100vh;
    width: 70%;
    position: absolute;
    top: 0;
    left: 0;

    z-index: 1;
  }

  img {
    padding: 1.5rem;
  }

  .container-menu-links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem;
    padding-left: 0;

    a {
      font-size: 1.25rem;
      font-weight: 700;
      text-decoration: none;
      color: var(--black);
      padding: 1rem 1.5rem;
    }
  }
`;
