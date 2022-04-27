import styled from "styled-components";

export const StyledProductDetails = styled.div`
  max-width: 450px;
  margin: 0 auto;

  .container-details {
    padding: 1.5rem;
  }

  .brand {
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.orange};
    margin-bottom: 1rem;
  }

  .product-name {
    text-transform: capitalize;
    line-height: 2.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.black};
  }

  .product-description {
    color: ${({ theme }) => theme.colors.darkGrayishBlue};
    line-height: 1.65rem;
    margin-bottom: 1.5rem;
  }

  .container-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
  }

  .current-price {
    font-size: 2rem;
  }

  .discount {
    margin-left: 1.5rem;
    color: ${({ theme }) => theme.colors.orange};
    background-color: ${({ theme }) => theme.colors.paleOrange};
    padding: 2px 8px;
    border-radius: 5px;
  }

  .og-price {
    color: ${({ theme }) => theme.colors.grayishBlue};
  }

  .container-discount {
    display: flex;
    align-items: center;
  }

  @media (min-width: 450px) {
    margin: 0 auto;
  }

  @media (min-width: 900px) {
    max-width: 80%;
    display: flex;

    .container-details {
      width: 50%;
    }
  }
`;
