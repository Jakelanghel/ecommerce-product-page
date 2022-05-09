import React, { useState } from "react";
import images from "./constants/images";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [productQuantity, setProductQuantity] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [carouselCount, setCarouselCount] = useState(0);
  const [productImgArr, setDisplayImgs] = useState([
    images.prodImg_1,
    images.prodImg_2,
    images.prodImg_3,
    images.prodImg_4,
  ]);

  const addQuantity = () => {
    setProductQuantity((oldState) => oldState + 1);
  };

  const subQuantity = () => {
    setProductQuantity((oldState) => {
      return oldState > 0 ? oldState - 1 : oldState;
    });
  };

  const toggleNav = () => {
    setNavIsOpen((oldState) => !oldState);
  };

  const toggleCart = () => {
    setCartIsOpen((oldState) => !oldState);
  };

  const addToCart = () => {
    setCartItems(productQuantity);
    setProductQuantity(0);
  };

  const emptyCart = () => {
    setCartItems(0);
    setCartIsOpen(false);
  };

  const nextImg = () => {
    if (carouselCount === productImgArr.length - 1) {
      setCarouselCount(0);
    } else {
      setCarouselCount((oldState) => oldState + 1);
    }
  };

  const getImg = (e) => {
    const index = parseInt(e.target.id);
    setCarouselCount(index);
  };

  const prevImg = () => {
    if (carouselCount === 0) {
      setCarouselCount(productImgArr.length - 1);
    } else {
      setCarouselCount((oldState) => oldState - 1);
    }
  };

  return (
    <Context.Provider
      value={{
        navIsOpen,
        toggleNav,
        productQuantity,
        addQuantity,
        subQuantity,
        addToCart,
        cartItems,
        carouselCount,
        nextImg,
        prevImg,
        productImgArr,
        cartIsOpen,
        toggleCart,
        emptyCart,
        getImg,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
