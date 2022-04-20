import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styled/Global";
import { theme } from "./components/styled/Theme";
import Nav from "./components/Nav"
import Carousel from "./components/Carousel"
import ProductDetails from "./components/ProductDetails";
import CartActions from "./components/CartActions";

function App() {

  const [quantity, setQuantity] = useState(0)

  const addItem = () => {
    setQuantity(prevState => (prevState += 1));
  }

  const subtractItem = () => {
    if(quantity > 0) {
      setQuantity(prevState => (prevState -= 1));
    }

  }

  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <main>
        <Nav />
        <Carousel/>
        <ProductDetails />
        <CartActions handleAdd={addItem} handleSub={subtractItem} itemQuantity={quantity}/>
      </main>
      
    </ThemeProvider>
    </>
  );
}



export default App;
