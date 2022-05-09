import styled from "styled-components";

export const StyledProdInfo = styled.div`
  padding: 0 1.5rem;
  max-width: 450px;
  margin: 1rem auto;

  h2 {
    font-size: 0.75rem;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--orange);
    letter-spacing: 2px;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 1.75rem;
    text-transform: capitalize;
    margin-bottom: 1rem;
    color: var(--black);
  }

  .prod-copy {
    font-size: 0.95rem;
    margin-bottom: 2rem;
    line-height: 1.5rem;
  }

  .container-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;

    .price {
      width: 160px;
      font-size: 1.5rem;
      color: var(--black);
      letter-spacing: 1px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        font-size: 1rem;
        background: var(--paleOrange);
        color: var(--orange);
        padding: 5px 8px;
        border-radius: 7px;
      }
    }

    .og-price {
      font-size: 1rem;
      color: var(--greyishBlue);
      text-decoration: line-through;
    }
  }

  @media screen and (min-width: 900px) {
    width: 50%;
    margin: 3rem 0;
    margin-left: 5rem;

    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 1rem;
    }

    .container-price {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 1rem;
    }

    .price {
      margin-bottom: 1rem;
    }

    .prod-copy {
      font-size: 1rem;
    }
  }
`;
