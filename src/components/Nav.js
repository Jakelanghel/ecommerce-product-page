import React from 'react';
import {StyledNav} from "./styled/Nav.Styled"



const Nav = (props) => {
    return (
        <StyledNav>
            <div className="flex">
                <img src="./images/icon-menu.svg" alt="menu" className='menu-img' onClick={props.handleClick}/>
                <img src="./images/logo.svg" alt="sneakers logo" className="logo" />
            </div>
            <div className="flex">
                {props.cartQuantity > 0 && <p className="cart-quantity">{props.cartQuantity}</p>}
                <img src="./images/icon-cart.svg" alt="cart"/>
                <img src="./images/image-avatar.png" alt="avatar" className='avatar-img'/>
            </div>
        </StyledNav>
    )


}


export default Nav