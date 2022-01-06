import React from "react";

import "./App.css";
import DisplayProducts from "./components/Display/shop";
import DisplayCart from "./components/Display/cart";

function App() {
  return (
    <div className="App">
      <DisplayProducts />
      <DisplayCart />
    </div>
  );
}

export default App;
