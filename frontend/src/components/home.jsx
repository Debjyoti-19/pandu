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
      <div className="flex flex-row space-x-4 overflow-x-auto p-4 bg-gray-100 mt-4">
        {products.map((product) => (
          <div
            key={product._id || product.category}
            className="flex flex-col items-center"
          >
            <div className=" bg-white">
              <img
                className="object-cover rounded-lg h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 mt-2 mb-2 mx-2"
                src={product.image}
                alt={product.productName}
                style={{ width: 100, height: 100 }}
              />
              <div>{product.productName}</div>
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
