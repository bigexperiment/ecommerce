import { PRODUCT_LIST } from "./ProductList";
import "./App.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {PRODUCT_LIST.map((item) => {
        return (
          <div className="product-grid">
            <Link to={"/products/" + item.id}>
              <h3>{item.name}</h3>
            </Link>
            <h3>${item.price}</h3>
            <img className="img" src={item.image} />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
