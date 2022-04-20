import React from 'react';
import {StyledNav} from "./styled/Nav.Styled"



const Nav = () => {
    return (
        <StyledNav>
            <div className="flex">
                <img src="./images/icon-menu.svg" alt="menu" className='menu-img'/>
                <img src="./images/logo.svg" alt="sneakers logo" className="logo" />
            </div>
            <div className="flex">
                <img src="./images/icon-cart.svg" alt="cart"/>
                <img src="./images/image-avatar.png" alt="avatar" className='avatar-img'/>
            </div>
        </StyledNav>
    )


}


export default Nav