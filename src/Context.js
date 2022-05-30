import React, { useState } from "react";
import images from "./constants/images";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [lightBoxIsOpen, setLightBoxIsOpen] = useState(false);
  const [productQuantity, setProductQuantity] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [carouselCount, setCarouselCount] = useState(0);
  const [productImgArr, setDisplayImgs] = useState([
    images.prodImg_1,
    images.prodImg_2,
    images.prodImg_3,
    images.prodImg_4,
  ]);

  const [thumbImgs, sethThumbImgs] = useState([
    { url: images.prodThumb_1, id: 0 },
    { url: images.prodThumb_2, id: 1 },
    { url: images.prodThumb_3, id: 2 },
    { url: images.prodThumb_4, id: 3 },
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

  const getImg = (e) => {
    const index = parseInt(e.target.id);
    setCarouselCount(index);
  };

  const nextImg = () => {
    if (carouselCount === productImgArr.length - 1) {
      setCarouselCount(0);
    } else {
      setCarouselCount((oldState) => oldState + 1);
    }
  };

  const prevImg = () => {
    if (carouselCount === 0) {
      setCarouselCount(productImgArr.length - 1);
    } else {
      setCarouselCount((oldState) => oldState - 1);
    }
  };

  const toggleLightBox = () => {
    setLightBoxIsOpen((oldState) => !oldState);
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
        lightBoxIsOpen,
        toggleLightBox,
        thumbImgs,
        setCartIsOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
