import { useParams } from "react-router-dom";
import { PRODUCT_LIST } from "./ProductList";

export const ProductPage = ({ cartData, changeCartData }) => {
  const { id } = useParams();
  const productSelected = id - 1;

  const addToCartHandler = (id) => {
    console.log(id);

    let cartValues = cartData;

    if (cartValues[id] > 0) {
      cartValues[id] += 1;
    } else {
      cartValues[id] = 1;
    }

    changeCartData(cartValues);
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
