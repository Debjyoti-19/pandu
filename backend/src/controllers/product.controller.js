import Product from "../models/product.model.js";
import cloudinary from "../lib/cloudinary.js";

export const handleAddItem = async (req, res) => {
  const { adminId, productName, description, category, subcategory, price } = req.body;

  try {
    if (!adminId || !productName || !description || !category || !subcategory || !price)
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
      category,
      subcategory,
      image: imageUrl,
      price
    });

    await newProduct.save();
    return res.status(201).json(newProduct);
  } catch (error) {
    console.log("Error in handleAddItem : ", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const handleGetItemByAdminId = async (req, res) => {
  const { adminId } = req.body;
  try {
    if (!adminId)
      return res.status(400).json({ message: "Admin id is required" });
    const products = await Product.find({ adminId }).select("-adminId");
    return res.status(200).json(products);
  } catch (error) {
    console.log("Error in handleGetItemByAdminId : ", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const handleGetItem = async (req, res) => {
  try {
    const products = await Product.find({})
    if (!products) return res.status(400).json({ message: "No products found" })
    return res.status(200).json(products)
  } catch (error) {
    console.log("Error in handleGetItem : ", error.message)
    res.status(500).json({ message: "Internal server error" })
  }
}

export const handleGetCategory = async (req, res) => {
  try {
    const categories = {
      "Clothing": ["Men's Wear", "Women's Wear", "Kids' Wear", "Footwear", "Accessories"],
      "Electronics": ["Mobile Phones", "Laptops & Computers", "Televisions", "Home Appliances", "Audio Devices"],
      "Home and Furniture": ["Living Room Furniture", "Bedroom Furniture", "Kitchen & Dining", "Home Decor", "Lighting"],
      "Beauty and Personal Care": ["Makeup", "Skincare", "Haircare", "Men's Grooming", "Fragrances"],
      "Sports and Outdoors": ["Fitness Equipment", "Outdoor Gear", "Activewear", "Sports Gear", "Cycling"]
    }
    return res.status(200).json(categories);
  } catch (error) {
    console.log("Error in handleGetCategory : ", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
}
