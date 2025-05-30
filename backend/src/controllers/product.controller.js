import Product from "../models/product.model.js";
import cloudinary from "../lib/cloudinary.js";

export const handleAddItem = async (req, res) => {
  const { adminId, productName, description, catagory } = req.body;

  try {
    if (!adminId || !productName || !description || !catagory)
      return res.status(400).json({ message: "All fields are required" });

    const streamUpload = (buffer) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "pandu-products" },
          (error, result) => {
            if (result) {
              resolve(result);
            } else {
              reject(error);
            }
          }
        );
        stream.end(buffer);
      });
    };

    const result = await streamUpload(req.file.buffer);

    const imageUrl = result.secure_url;

    const newProduct = new Product({
      adminId,
      productName,
      description,
      catagory,
      image: imageUrl,
    });

    await newProduct.save();
    return res.status(201).json(newProduct);
  } catch (error) {
    console.log("Error in handleAddItem : ", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const handleGetItem = async (req, res) => {
  const { adminId } = req.body;
  try {
    if (!adminId)
      return res.status(400).json({ message: "Admin id is required" });
    const products = await Product.find({ adminId }).select("-adminId");
    console.log(products);
    return res.status(200).json(products);
  } catch (error) {
    console.log("Error in handleGetItem : ", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
