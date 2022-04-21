import styled from "styled-components"

export const StyledMenu = styled.div `
width: 65%;
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 1;
    height: 100vh;
    background-color: ${({theme}) => theme.colors.white};
    padding: 1.5rem;


    img {
        width: 15px;
        margin-bottom: 1.5rem;  
    }

    a {
        font-weight: 700;
        text-decoration: none;
        text-transform: capitalize;
        padding: 1.25rem 0;
        color:${({theme}) => theme.colors.black};
    }
`