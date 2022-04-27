import styled from "styled-components"

export const StyledCarousel = styled.div `
    width: 100%;
    position: relative;
    max-width: 450px;
    margin: 0 auto;

  

    .carousel-img {
        width: 100%;
        height: 350px;
        /* object-fit: cover; */
    }

    

    .carousel-actions {
        width: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;
    }

    .carousel-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .75rem 1rem;
        border-radius: 50%;
        border: none;
        background-color: ${({theme}) => theme.colors.white};
    }

    .car-btn-img {
        width: 10px;
    }

    @media(min-width:450px) {
        margin: 2rem auto ;

        .carousel-img {
            border-radius: 10px;
        }
    }


`