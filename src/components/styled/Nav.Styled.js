import styled from "styled-components"

export const StyledNav = styled.nav `
    width: 100%;
    display: flex;
    padding: 1.5rem;
    justify-content: space-between;
    position: relative;

    .flex {
        display : flex;
        align-items: center;
    }

    .menu-img {
        width: 18px;
        height: 18px;
        margin-right: 1rem;
    }
    
    .avatar-img {
        width: 35px;
        margin-left: 1.5rem;
    }

    .cart-quantity {
        font-size: .5rem;
        font-weight: 700;
        padding: 0 6px;
        border-radius: 40%;
        color: ${({theme}) => theme.colors.white};
        background-color: ${({theme}) => theme.colors.orange};
        position: absolute; 
        top: 25px;
        right: 77px;
    }
`