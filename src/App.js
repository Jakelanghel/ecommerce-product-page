import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styled/Global";
import { theme } from "./components/styled/Theme";
import Nav from "./components/Nav"
import Carousel from "./components/Carousel"
import ProductDetails from "./components/ProductDetails";
import CartActions from "./components/CartActions";
import Menu from "./components/Menu";

function App() {

  const [quantity, setQuantity] = useState(0)
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [cart, setCart] = useState({
    empty: true,
    quantity: 0,
  })


  const addItem = () => {
    setQuantity(prevState => (prevState += 1));
  }

  const subtractItem = () => {
    if(quantity > 0) {
      setQuantity(prevState => (prevState -= 1));
    }
  }

  const addToCart = () => {
    setCart(prevState => ({...prevState, quantity: quantity, empty: false}))
    setQuantity(0)
  }

  const toggleMenu = () => {
    setMenuIsOpen(prevState => (!prevState))
  }

  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <main>
        {menuIsOpen && <Menu handleClick={toggleMenu}/>}
        <Nav handleClick={toggleMenu} cartQuantity={cart.quantity}/>
        <Carousel/>
        <ProductDetails />
        <CartActions handleAdd={addItem} handleSub={subtractItem} addToCart={addToCart} itemQuantity={quantity} />
      </main>
      
    </ThemeProvider>
    </>
  );
}



export default App;
