import React from 'react';
import StyledCart from "./styled/Cart.Styled"

const Cart = () => {
    return (
        <StyledCart>
            <h2>Cart</h2>
            <div>
                <img src="./images/image-1-product-thumbnail" alt="shoes" className="thumbnail" />
                <p className="description">Autumn Limited Edition...</p>
            </div>
        </StyledCart>
    )
}