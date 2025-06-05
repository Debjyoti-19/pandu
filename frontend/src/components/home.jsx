import { useEffect, useState } from "react";
import NavBar from "./navbar";
import { useAdminStore } from "../store/useAdminStore";
import { useAuthStore } from "../store/useAuthStore";


function Home() {
  const { authUser } = useAuthStore();
  if (!authUser) {
    return <div>Please log in to view products.</div>;
  }
  const { getAllProducts } = useAdminStore();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getAllProducts();
      if (res && res.data) {
        setProducts(res.data);
      }
    };
    fetchProducts();
  }, [getAllProducts]);

  return (
    <>
      <NavBar />
      <div className="flex flex-row ">
        {products.map((product) => (
          <div
            key={product._id || product.category}
            className=""
          >
            <div className=" bg-white h-60 w-60 m-2 p-2 rounded-lg shadow-md flex flex-col items-center">
              <img
                className="h-100 w-100 rounded object-cover mb-2"
                src={product.image}
                alt={product.productName}
                style={{ width: 100, height: 100 }}
              />
              <div>{product.productName}</div>
              <div>₹{product.price}</div>
            </div>
            {/* <div>{product.description}</div>
            <div>{product.category}</div> */}
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
