import styled from "styled-components";

export const StyledProductImg = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }

  .main-img {
    width: 100%;
    height: 300px;
    max-width: 450px;
    object-fit: cover;
  }

  @media (min-width: 400px) {
    .main-img {
      height: 400px;
    }
  }

  @media (min-width: 450px) {
    align-items: center;

    .main-img {
      border-radius: 10px;
    }
  }

  .desktop-selector {
    display: none;
  }

  .mobile-selector {
    width: 100%;
    max-width: 425px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
  }

  .mobile-sel-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50%;
    padding: 0.75rem 1rem;

    img {
      width: 10px;
    }
  }

  @media screen and (min-width: 900px) {
    position: static;
    flex-direction: row;
    width: 40%;

    .mobile-selector {
      display: none;
    }

    .container-img {
      width: 100%;
    }

    .desktop-selector {
      width: 100%;
      max-width: 450px;
      display: flex;
      justify-content: space-between;
      margin-top: 1.5rem;

      img {
        width: 20%;
        height: 20%;
        border-radius: 10px;
      }
    }
  }
`;
