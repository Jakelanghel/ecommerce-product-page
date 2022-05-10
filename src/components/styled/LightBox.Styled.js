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
      hue-rotate(277deg) brightness(103%) contrast(100%);
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
    width: 485px;
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

  .thumbnail {
    width: 75px;
    border-radius: 10px;
  }
`;
