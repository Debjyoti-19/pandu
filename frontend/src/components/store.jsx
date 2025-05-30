import { useState } from "react";
import { useAdminStore } from '../store/useAdminStore.js'
import { useAuthStore } from '../store/useAuthStore.js'

function Store() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const { isUploadingData, addProduct } = useAdminStore();
  const { authUser } = useAuthStore()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!productName || !description || !category || !selectedImage) {
      return alert("Enter valid details");
    }

    // Use FormData for file upload
    const formData = new FormData();
    formData.append("adminId", authUser._id)
    formData.append("productName", productName);
    formData.append("description", description);
    formData.append("catagory", category); // match backend spelling!
    formData.append("image", selectedImage);

    addProduct(formData)
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
          Category
          <input
            type="text"
            placeholder="Enter Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
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
