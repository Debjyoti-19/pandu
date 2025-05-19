import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Store() {
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  return (
    <>
      <div>
        <h1>Store</h1>

        <div>
          Product Name
          <input
            type="text"
            placeholder="Enter Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full px-4 py-2 bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        <div>
          Description
          <input
            type="text"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        <div>
          Image
          <input
            type="file"
            placeholder="Choose Image"
            accept="image/*"
            value={description}
            onChange={(e) => setImage(e.target.value)}
            className="w-full px-4 py-2 bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        <div>
          category
          <input
            type="text"
            placeholder="Enter Product Name"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        <button
          type="button"
          className="w-full bg-blue-300 text-white py-2 px-5 rounded-lg font-semibold hover:bg-gray-500 transition duration-200"
        ></button>
      </div>
    </>
  );
}

export default Store;
