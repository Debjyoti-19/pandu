import { useEffect, useState } from "react";
import NavBar from "./navbar";
import { useAdminStore } from "../store/useAdminStore";
import { useAuthStore } from "../store/useAuthStore";
import { Heart, ShoppingCart, ShoppingBag, X } from "lucide-react";

function Home() {
  const { authUser } = useAuthStore();
  if (!authUser) {
    return <div>Please log in to view products.</div>;
  }
  const { getAllProducts } = useAdminStore();

  const [products, setProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  return (
    <>
      <NavBar />
      {/* Modal for product details */}
      {modalOpen && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
              onClick={() => setModalOpen(false)}
            >
              <X size={28} />
            </button>
            <div className="flex flex-col items-center">
              <div className="h-56 w-56 flex items-center justify-center mb-4 bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                <img
                  className="h-full w-full object-contain"
                  src={selectedProduct.image}
                  alt={selectedProduct.productName}
                />
              </div>
              <div className="font-bold text-xl text-gray-800 mb-2 text-center">
                {selectedProduct.productName}
              </div>
              <div className="text-green-700 font-bold text-lg mb-2">
                ₹{selectedProduct.price}
              </div>
              <div className="text-gray-600 mb-4 text-center">
                {selectedProduct.description}
              </div>
              <div className="flex gap-4 w-full justify-center">
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  <ShoppingCart size={18} /> Add to Cart
                </button>
                <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                  <ShoppingBag size={18} /> Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
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
                        className="h-full w-full object-contain transition-transform duration-200 hover:scale-110 cursor-pointer"
                        src={product.image}
                        alt={product.productName}
                        onClick={() => {
                          setSelectedProduct(product);
                          setModalOpen(true);
                        }}
                      />
                    </div>
                    <div className="font-semibold text-center text-gray-800 truncate w-full">
                      {product.productName}
                    </div>
                    <div className="text-green-700 font-bold mt-1 text-lg">
                      ₹{product.price}
                    </div>
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
