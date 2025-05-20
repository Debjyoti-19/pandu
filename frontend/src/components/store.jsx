import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminStore } from "../store/useAdminStore.js";

function Store() {
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [catagory, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [products, setProducts] = useState([]);
  const { addProduct } = useAdminStore();

  const handleAddProduct = () => {
    if (!productName || !description || !catagory || !image) {
      return alert("Please fill all the fields");
    }

    const data = new FormData();
    {
      data.append("productName", productName);
      data.append("description", description);
      data.append("catagory", catagory);
      data.append("image", image);
    }

    setProducts([...products, { productName, description, catagory, image }]);
    setProductName("");
    setDescription("");
    setCategory("");
    setImage(null);
    document.getElementById("image-input").value = "";
    console.log("product added: ", {
      productName,
      description,
      catagory,
      image,
    });
    addProduct(data);
    return alert("Product added successfully", navigate("/home"));
  };

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
            id="image-input"
            placeholder="Choose Image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full px-4 py-2 bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        <div>
          category
          <input
            type="text"
            placeholder="Enter Product Name"
            value={catagory}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        <button
          type="button"
          onClick={handleAddProduct}
          className="w-full bg-blue-300 text-white py-2 px-5 rounded-lg font-semibold hover:bg-gray-500 transition duration-200"
        >
          Add product
        </button>
      </div>
    </>
  );
}

export default Store;
