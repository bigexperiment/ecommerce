import { BrowserRouter, Routes, Route, Link, json } from "react-router-dom";
import "./App.css";

import { ProductPage } from "./ProductPage";
import Cart from "./Cart.jsx";
import Home from "./Home";
import { useState, useEffect } from "react";

function App() {
  const [cartData, setCartData] = useState({});

  const changeCartData = (data) => {
    setCartData(data);
    localStorage.setItem("cartData", JSON.stringify(data));
  };

  useEffect(() => {
    let savedCartData = localStorage.getItem("cartData");
    if (savedCartData) {
      setCartData(JSON.parse(savedCartData));
    }
  }, []);

  // const cartLength =
  //   Object.values(cartData).length !== 0 ? Object.values(cartData).length : 0;

  const cartDataIntoArray = Object.values(cartData);

  let cartLength = 0;
  cartDataIntoArray.forEach((item) => {
    item = parseInt(item);
    cartLength += item;
  });

  return (
    <div>
      <h1>OLIVIASHOP</h1>
      <BrowserRouter>
        <div className="App nav-links">
          <Link to="/">
            <button>HOME</button>
          </Link>
          <Link to="/cart">
            <button>CART {cartLength} items</button>
          </Link>

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/products/:id"
              element={
                <ProductPage
                  cartData={cartData}
                  changeCartData={changeCartData}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart cartData={cartData} changeCartData={changeCartData} />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
