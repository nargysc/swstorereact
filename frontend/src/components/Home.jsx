import {   useGetAllProductsQuery  } from "../features/productsApi";
import { useHistory } from "react-router";
import { addToCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";
const Home = () => {  
    const { data, isLoading } = useGetAllProductsQuery();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleAddToCart = (product) => {
      dispatch(addToCart(product));
      history.push("/cart");
    };
return (

<div className="home-container">
  {isLoading ? (
    <p>Loading..</p>
  ) : (
    <>
    <h2>New Arrivals</h2>
    <div className="products">
                {data &&
                  data?.map((product) => (
                    <div key={product.id} className="product">
                      <h3>{product.name}</h3>
                      <img src={product.image} alt={product.name} />
                      <div className="details">
                        <span className="price">${product.price}</span>
                      </div>
                      <button onClick={() => handleAddToCart(product)}>
                    Add To Cart
                  </button> 
                      </div>
                ))}
    </div>
        </>
  )}
</div>
);
                  };
    export default Home;