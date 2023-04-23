import { PRODUCT_LIST } from "./ProductList";

const Cart = ({ cartData, changeCartData }) => {
  const increase = (value) => {
    let cartValues = { ...cartData };

    cartValues[value] = parseInt(cartValues[value]) + 1;

    changeCartData(cartValues);
  };

  const decrease = (value) => {
    let cartValues = { ...cartData };

    cartValues[value] === 1
      ? "true"
      : (cartValues[value] = cartValues[value] - 1);

    changeCartData(cartValues);
  };

  const handleChange = (event, data) => {
    const { value } = event.target;

    const cartValues = { ...cartData, [data]: value };
    changeCartData(cartValues);
  };

  const deleteHandler = (data) => {
    console.log(data);

    let cartValues = { ...cartData };
    delete cartValues[data];

    changeCartData(cartValues);
  };

  return (
    <div>
      {Object.keys(cartData).map((data) => (
        <div key={data} className="cart-item">
          <div> {PRODUCT_LIST[data - 1].name}</div>
          <div>Quantity: {cartData[data]}</div>
          <button onClick={() => decrease(data)}>-</button>
          <input
            className="num-box"
            min={1}
            type="number"
            value={cartData[data]}
            onChange={(event) => handleChange(event, data)}
          />
          <button onClick={() => increase(data)}>+</button>
          <button onClick={() => deleteHandler(data)}> Delete</button>
        </div>
      ))}
      {Object.keys(cartData).length > 0 ? (
        <button onClick={() => alert("checkout")}> checkout </button>
      ) : (
        "Your cart is empty. "
      )}
    </div>
  );
};

export default Cart;
