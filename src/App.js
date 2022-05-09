import React from "react";
import Nav from "./components/Nav";
import Product from "./pages/Product";
import GlobalStyles from "./components/styled/Global";

function App() {
  return (
    <main>
      <GlobalStyles />
      <Nav />
      <Product />
    </main>
  );
}

export default App;
