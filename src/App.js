import React, { useState } from "react";
import Nav from "./components/Nav";
import Product from "./pages/Product";
import GlobalStyles from "./components/styled/Global";
import { Context } from "./Context";

function App() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <Product />
    </>
  );
}

export default App;
