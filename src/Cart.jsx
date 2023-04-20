import { PRODUCT_LIST } from "./ProductList";

const Cart = ({ cartData }) => {
  let cartLength = Object.values(cartData).reduce((acc, curr) => acc + curr, 0);

  return (
    <div>
      {Object.keys(cartData).map((data) => (
        <div key={data}>
          {PRODUCT_LIST[data - 1].name} * {cartData[data]}
        </div>
      ))}
    </div>
  );
};

export default Cart;
