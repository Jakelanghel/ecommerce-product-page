import styled from "styled-components";

export const StyledLightBox = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--lightBoxBkg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .close-icon {
    align-self: flex-end;
    margin-bottom: 1rem;
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%)
      hue-rotate(298deg) brightness(99%) contrast(103%);
  }

  .close-icon:hover {
    filter: brightness(0) saturate(100%) invert(66%) sepia(60%) saturate(4503%)
      hue-rotate(348deg) brightness(102%) contrast(101%);
  }

  .main-img {
    width: 450px;
    border-radius: 20px;
    margin-bottom: 2.5rem;
  }

  .container-img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .mobile-selector {
    width: 495px;
    position: absolute;
    top: 42%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
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

  .desktop-selector {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .desktop-selector {
    width: 100%;
    max-width: 400px;
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;

    .thumb-container {
      width: 20%;
    }
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
