import { useEffect, useState } from "react";
import { useAdminStore } from "../store/useAdminStore.js";
import { useAuthStore } from "../store/useAuthStore.js";

function Store() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState({});
  const [subcategory, setSubcategory] = useState("");

  const { isUploadingData, addProduct, getCatagory } = useAdminStore();
  const { authUser } = useAuthStore();

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await getCatagory();
      if (res && res.data) {
        setCategories(res.data);
      } else {
        console.error("Failed to fetch categories");
      }
    };
    fetchCategories();
  }, [getCatagory]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !productName ||
      !description ||
      !category ||
      !subcategory ||
      !selectedImage ||
      !price
    ) {
      return alert("Enter valid details");
    }

    const formData = new FormData();
    formData.append("adminId", authUser._id);
    formData.append("productName", productName);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("subcategory", subcategory);
    formData.append("image", selectedImage);
    formData.append("price", price);

    addProduct(formData);
  

  setProductName("");
  setDescription("");
  setSelectedImage(null);
  setPrice("");
  setCategory("");
  setSubcategory("");

  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
            onChange={(e) => setSelectedImage(e.target.files[0])}
            className="w-full px-4 py-2 bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        <div>
          Price
          <input
            type="text"
            placeholder="₹ Set price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-2 bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        <div>
          Category
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setSubcategory(""); // Reset subcategory when category changes
            }}
            className="w-full px-4 py-2 bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            required
          >
            <option value="">Select Category</option>
            {Object.keys(categories).map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
            </select>
        </div>

        <div>
          Subcategory
          <select
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
            className="w-full px-4 py-2 bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            required
            disabled={!category || !categories[category]}
          >
            <option value="">Select Subcategory</option>
            {category &&
              categories[category] &&
              categories[category].map((subcat) => (
                <option key={subcat} value={subcat}>
                  {subcat}
                </option>
              ))}
          </select>
        </div>

        <button
          type="submit"
          className="mt-5 bg-blue-300 text-white py-2 px-5 rounded-lg font-semibold hover:bg-gray-500 transition duration-200"
          disabled={isUploadingData}
        >
          {isUploadingData ? "Uploading..." : "Submit"}
        </button>
      </form>
    </>
  );
}

export default Store;