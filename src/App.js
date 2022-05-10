import React from "react";
import Nav from "./components/Nav";
import Product from "./pages/Product";
import GlobalStyles from "./components/styled/Global";
import LightBox from "./components/LightBox";
import { Context } from "./Context";

function App() {
  const { lightBoxIsOpen } = React.useContext(Context);
  return (
    <>
      <GlobalStyles />
      <Nav />
      <Product />
      {lightBoxIsOpen && <LightBox />}
    </>
  );
}

export default App;
