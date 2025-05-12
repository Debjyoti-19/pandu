import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    adminId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    productName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    catagory: {
        type: String,
        required: true,
    },
    feedback: {
        type: [
            {
                createdBy: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User",
                },
                comment: {
                    type: String,
                },
                rating: {
                    type: Number,
                    min: 1,
                    max: 5,
                },
            }
        ],
        default: [],
    },
    stock: {
        type: Number,
        default: 0 // can updated in adding products page
    }
})

const Product = mongoose.model("Product", productSchema)

export default Product