import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styled/Global";
import { theme } from "./components/styled/Theme";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import ProductDetails from "./components/ProductDetails";
import CartActions from "./components/CartActions";
// import Menu from "./components/Menu";
import Cart from "./components/Cart";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [cart, setCart] = useState({
    open: false,
    empty: true,
    quantity: 0,
  });

  const [products, setProducts] = useState([
    {
      price: 125.0,
      description: "Autumn Limited Edition...",
    },
  ]);

  const addItem = () => {
    setQuantity((prevState) => (prevState += 1));
  };

  const subtractItem = () => {
    if (quantity > 0) {
      setQuantity((prevState) => (prevState -= 1));
    }
  };

  const addToCart = () => {
    setCart((prevState) => ({
      ...prevState,
      quantity: prevState.quantity + quantity,
      empty: false,
    }));
    setQuantity(0);
  };

  const removeFromCart = () => {
    setCart((prevState) => {
      const newQuantity = prevState.quantity - 1;
      if (newQuantity === 0) {
        return { ...prevState, open: false, quantity: newQuantity };
      } else {
        return { ...prevState, open: true, quantity: newQuantity };
      }
    });
  };

  const toggleMenu = () => {
    setMenuIsOpen((prevState) => !prevState);
    console.log(menuIsOpen);
  };

  const openCart = () => {
    if (cart.quantity > 0) {
      setCart((prevState) => ({ ...prevState, open: !prevState.open }));
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <main>
          {/* {menuIsOpen && <Menu handleClick={toggleMenu} />} */}
          <Nav
            handleClick={toggleMenu}
            cartQuantity={cart.quantity}
            showCart={openCart}
            isOpen={menuIsOpen}
          />
          {cart.open && (
            <Cart
              ogPrice={products[0].price}
              description={products[0].description}
              quantity={cart.quantity}
              removeItem={removeFromCart}
            />
          )}
          <ProductDetails />
          <CartActions
            handleAdd={addItem}
            handleSub={subtractItem}
            addToCart={addToCart}
            itemQuantity={quantity}
          />
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
