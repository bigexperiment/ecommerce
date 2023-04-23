import { useParams } from "react-router-dom";
import { PRODUCT_LIST } from "./ProductList";
import { useState } from "react";

export const ProductPage = ({ cartData, changeCartData }) => {
  const { id } = useParams();
  const productSelected = id - 1;

  const addToCartHandler = (id) => {
    console.log(id);

    changeCartData({
      ...cartData,
      [id]: (cartData[id] || 0) + 1,
    });
  };
  const [num, setNum] = useState(0);

  const change = (e) => {
    setNum(e.target.value);
  };
  return (
    <div>
      <h3>Product: {PRODUCT_LIST[productSelected].name}</h3>
      <h3>Price: ${PRODUCT_LIST[productSelected].price}</h3>
      <button
        onClick={() => {
          addToCartHandler(id);
        }}
      >
        ADD TO CART
      </button>
    </div>
  );
};
