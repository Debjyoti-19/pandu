import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Store() {
  const navigate = useNavigate();
  const [showProduct, setShowProduct] = useState(false);

  // Example product data
  const product = {
    name: "Sample Product",
    description: "This is a sample product description.",
    category: "Electronics",
    image: "https://via.placeholder.com/150",
  };

  const handleShowProduct = () => {
    setShowProduct(true);
  };

  return (
    <>
      <h1>My store</h1>
      <div>
        <button
          onClick={() => navigate("/Home")}
          className="w-full bg-black text-white py-3 rounded-lg font-semibold text-lg hover:bg-gray-500 transition duration-200"
        >
          Go to Home
        </button>
      </div>
      <div>
        <button onClick={handleShowProduct}>Show Products</button>
      </div>
      {showProduct && (
        <div className="mt-6 p-4 border rounded-lg shadow">
          <img
            src={product.image}
            alt={product.name}
            className="mb-2 w-32 h-32 object-cover"
          />
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-gray-500">Category: {product.category}</p>
        </div>
      )}
    </>
  );
}

export default Store;
