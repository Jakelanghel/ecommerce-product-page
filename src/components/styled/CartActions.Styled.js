import styled from "styled-components"

export const StyledCartActions = styled.div `
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({theme}) => theme.colors.black};
    padding: 0 1rem;
    max-width: 450px;
    margin: 0 auto;

    .container-quantity {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: ${({theme}) => theme.colors.lightGrayishBlue};
        padding: 0 .5rem;
        border-radius: 10px;
        margin-bottom: 1rem;
    }

    .cart-btn {
        font-size: 2rem;
        font-weight: 700;
        border: none;
        background: inherit;
        color: ${({theme}) => theme.colors.orange};
        padding: .5rem 1.5rem;
        
    }

    .cart-img {
        filter: brightness(0) saturate(100%) invert(99%) sepia(100%) saturate(3%) hue-rotate(200deg) brightness(107%) contrast(100%);
        margin-right: 1em;
    }

    .minus {
        font-size: 2.5rem;
    }

    .add-cart-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        font-weight: 700;
        text-transform: capitalize;
        border: none;
        border-radius: 10px;
        padding: 1rem 0;
        color: ${({theme}) => theme.colors.white};
        background-color: ${({theme}) => theme.colors.orange};
        margin-bottom: 8rem;
    }
`