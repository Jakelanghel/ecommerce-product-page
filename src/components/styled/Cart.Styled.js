import styled from "styled-components"

export const StyledCart = styled.div `
    width: 95%;
    /* max */
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 10px;
    color: ${({theme}) => theme.colors.darkGrayishBlue};


    h2 {
        font-size: 1rem;
        padding: 1.25rem;
        border-bottom: solid 2px ${({theme}) => theme.colors.lightGray};
        color: ${({theme}) => theme.colors.black};
    }

    .container-cart {
        display: flex;
        align-items: center;
        padding: 1.25rem;

    }

    .thumbnail {
        width: 50px;
        height: 50px;
        border-radius: 5px;
        margin-right: 1rem;
    }

    .description {
        font-size: .85rem;
        margin-bottom: .25rem;
    }

    .delete-btn {
        margin-left: auto;
        border: none;
        background-color: transparent;
    }

    span {
        font-weight: 700;
        color: ${({theme}) => theme.colors.black};
        margin-left: .5rem;
    }

    .checkout-btn {
        width: 90%;
        margin: 0 auto;
        margin-bottom: 2rem;
        font-size: 1rem;
        font-weight: 700;
        color: ${({theme}) => theme.colors.white};
        background-color: ${({theme}) => theme.colors.orange};
        border: none;
        border-radius: 10px;
        padding: 1.25rem 0;
    }

    




`