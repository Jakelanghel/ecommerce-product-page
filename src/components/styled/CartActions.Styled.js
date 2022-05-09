import styled from "styled-components";

export const StyledCartActions = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;
  width: 100%;
  margin: 0 auto;

  .container-quantity {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #f7f8fd;
    margin-bottom: 1rem;
    border-radius: 10px;

    .quantity-btn {
      border: none;
      background-color: inherit;
      padding: 1rem 1.5rem;
      border-radius: 10px;
    }

    .quantity-btn:hover {
      cursor: pointer;
    }

    .quantity {
      font-weight: 700;
      padding: 1rem 0;
    }
  }

  .add-to-cart {
    font-size: 1rem;
    font-weight: 700;
    color: var(--white);
    background-color: var(--orange);
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 10px;

    img {
      width: 20px;
      margin-right: 1rem;
      filter: brightness(0) saturate(100%) invert(100%) sepia(0%)
        saturate(7500%) hue-rotate(277deg) brightness(103%) contrast(100%);
    }
  }

  .add-to-cart:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  @media screen and (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;

    .container-quantity {
      width: 35%;
      margin-bottom: 0;
    }

    .add-to-cart {
      width: 45%;
      padding: 10px 0;
    }
  }
`;
