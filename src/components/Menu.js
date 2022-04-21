import React from 'react';
import { StyledMenu } from './styled/Menu.Styled';

const Menu = (props) => {
    return ( 
        <StyledMenu>
            <img src="./images/icon-close.svg" alt="close menu" onClick={props.handleClick}/>
            <a href="#" className="menu-link">collections</a>
            <a href="#" className="menu-link">men</a>
            <a href="#" className="menu-link">women</a>
            <a href="#" className="menu-link">about</a>
            <a href="#" className="menu-link">contact</a>
        </StyledMenu>
    )
}

export default Menu