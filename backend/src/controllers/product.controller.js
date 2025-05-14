import Product from "../models/product.model.js"

export const handleAddItem = async (req, res) => {
    const { _id, productName, description, catagory, image } = req.body
    try {
        if (!_id || !productName || !description || !catagory || !image) return res.status(400).json({ message: "All fields are required" })
        
        const newProduct = new Product({
            _id,
            productName,
            description,
            catagory,
            image
        })

        if(newProduct) {
            await newProduct.save()
            return res.stauts(201).json(newProduct)
        } else return res.status(400).json({ message: "Enter valid details" })
    } catch (error) {
        console.log("Error in handleAddItem : ", error.message)
        res.status(500).json({ message: "Internal server error" })
    }
}