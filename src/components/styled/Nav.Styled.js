import styled from "styled-components"

export const StyledNav = styled.nav `
    width: 100%;
    display: flex;
    padding: 1.5rem;
    justify-content: space-between;

    .flex {
        display : flex;
        align-items: center;
    }

    .menu-img {
        width: 18px;
        height: 18px;
        margin-right: 1rem;
        filter: brightness(0) saturate(100%) invert(6%) sepia(15%) saturate(126%) hue-rotate(202deg) brightness(97%) contrast(103%);    
    }
    
    .avatar-img {
        width: 35px;
        margin-left: 1.5rem;
    }
`