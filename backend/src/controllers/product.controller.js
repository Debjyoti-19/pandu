import Product from "../models/product.model.js";
import cloudinary from "../lib/cloudinary.js";

export const handleAddItem = async (req, res) => {
    const { productName, description, catagory } = req.body
    const adminId = req.user?._id

  try {
    if (!adminId || !productName || !description || !catagory)
      return res.status(400).json({ message: "All fields are required" });

        const result = await cloudinary.uploader.upload(req.file.buffer, {
            folder: 'pandu-products'
        })

    const imageUrl = result.secure_url;

    const newProduct = new Product({
      adminId,
      productName,
      description,
      catagory,
      image: imageUrl,
    });

        await newProduct.save()
        return res.status(201).json(newProduct)
    } catch (error) {
        console.log("Error in handleAddItem : ", error.message)
        res.status(500).json({ message: "Internal server error" })
    }
}