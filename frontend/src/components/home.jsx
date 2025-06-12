import { useEffect, useState } from "react";
import NavBar from "./navbar";
import { useAdminStore } from "../store/useAdminStore";
import { useAuthStore } from "../store/useAuthStore";
import { Heart, Route } from "lucide-react";
import Product from "./product";
import { useNavigate } from "react-router-dom";

function Home() {
  const { authUser } = useAuthStore();
  if (!authUser) {
    return <div>Please log in to view products.</div>;
  }
  const { getAllProducts } = useAdminStore();
  const navigate = useNavigate();
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

  // Group products by subcategory
  const grouped = products.reduce((acc, product) => {
    const key = product.subcategory || "Other";
    if (!acc[key]) acc[key] = [];
    acc[key].push(product);
    return acc;
  }, {});

  <Route path="/product/:id" element={<Product />} />;

  return (
    <>
      <NavBar />
      <div className="mx-10 mt-5 h-[calc(100vh-80px)] overflow-y-auto">
        {Object.entries(grouped).map(([subcategory, items]) => (
          <div key={subcategory} className="mb-10">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {subcategory}
            </h1>
            <div
              className="flex flex-row overflow-x-auto w-full px-4 py-4 space-x-4"
              style={{
                scrollBehavior: "smooth",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <div className="hide-scrollbar flex flex-row w-full">
                {items.map((product) => (
                  <div
                    key={product._id}
                    className="bg-white h-72 w-60 m-2 p-4 rounded-lg shadow-lg flex flex-col items-center flex-shrink-0 transition-transform hover:scale-105 border border-gray-100"
                    style={{
                      scrollSnapAlign: "start",
                    }}
                  >
                    <div className="self-end mb-2 cursor-pointer text-gray-400 hover:text-red-500">
                      <Heart size={20} />
                    </div>
                    <div className="h-36 w-36 flex items-center justify-center mb-3 bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                      <img
                        className="h-full w-full object-contain transition-transform duration-200 hover:scale-110"
                        src={product.image}
                        alt={product.productName}
                        onClick={() => navigate(`/product/${product._id}`)}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                    <div className="font-semibold text-center text-gray-800 truncate w-full">{product.productName}</div>
                    <div className="text-green-700 font-bold mt-1 text-lg">₹{product.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
