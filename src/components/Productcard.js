import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../../src/context/cartContext";
const ProductCard = () => {
  const [prodData, setprodData] = useState("");
  const { cartState, dispatch } = useCart();
  console.log(cartState);

  const url = "https://fakestoreapi.com/products";

  const fetchInfo = () => {
    return axios.get(url).then((response) => setprodData(response.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  //console.log(prodData);
  return (
    <>
      <span className="prod_count">Showing All Products:{prodData.length}</span>
      {prodData &&
        prodData.map((items) => {
          return (
            <div className="prod_cont" key={items.id}>
              <div className="prod_data">
                <img src={items.image} atl="img" />
                <span>{items.title}</span>
                <h3>Rating:{items.rating.rate}</h3>
                <h3>Price:{items.price}</h3>
                <button
                  onClick={() =>
                    dispatch({ type: "ADD_TO_CART", payload: items })
                  }
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          );
        })}
    </>
  );
};
export { ProductCard };
