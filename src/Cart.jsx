const Cart = ({ cartData }) => {
  console.log(cartData);
  let cartLength = Object.values(cartData).length;
  return <div>Cart -{cartLength} items</div>;
};

export default Cart;
