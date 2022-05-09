import styled from "styled-components";

export const StyledCart = styled.div`
  width: 90%;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  h3 {
    color: var(--black);
    font-size: 1rem;
    border-bottom: solid 1px var(--grey);
    padding: 1.5rem;
  }

  .container-cart-item {
    display: flex;
    align-items: center;
    padding: 1rem;

    .thumb {
      width: 50px;
      height: 50px;
      border-radius: 5px;
    }

    .item-details {
      display: flex;
      flex-direction: column;
      margin-left: 1rem;
    }

    P {
      font-size: 0.95rem;
    }

    .delete-icon {
      width: 15px;
      height: 15px;
      margin-left: auto;
    }

    span {
      color: var(--black);
      font-weight: 700;
      margin-left: 5px;
    }
  }

  .checkout {
    width: 90%;
    align-self: center;
    font-weight: 700;
    letter-spacing: 1px;
    color: var(--white);
    background-color: var(--orange);
    border: none;
    border-radius: 10px;
    padding: 1rem 0;
    margin-bottom: 1.5rem;
  }

  .empty-msg {
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    padding: 5.5rem;
  }

  @media screen and (min-width: 900px) {
    width: 325px;
    top: 100px;
    transform: translateX(30%);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
