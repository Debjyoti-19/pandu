import { useEffect, useState } from "react";
import NavBar from "./navbar";
import { useAdminStore } from "../store/useAdminStore";
import { useAuthStore } from "../store/useAuthStore";

function Home() {
  const { authUser } = useAuthStore();
  if (!authUser) {
    return <div>Please log in to view products.</div>;
  }
  const { getProduct } = useAdminStore();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getProduct(authUser._id);
      console.log(res);
      if (res && res.data) {
        setProducts(res.data);
      }
    };
    fetchProducts();
  }, [getProduct, authUser._id]);

  return (
    <>
      <NavBar />
      {authUser.firstName}
      {products.map((product) => (
        <div key={product._id || product.catagory}>
          <div>{product.productName}</div>
          <div>{product.description}</div>
          <div>{product.catagory}</div>
          <img
            src={product.image}
            alt={product.productName}
            style={{ width: 100 }}
          />
        </div>
      ))}
    </>
  );
}

export default Home;
