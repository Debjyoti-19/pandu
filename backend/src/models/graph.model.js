import mongoose from "mongoose";

const graphSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    sells: {
        type: Number,
        default: 0,
    },
    visit: {
        type: Number,
        default: 0,
    },
    likes: {
        type: Number,
        default: 0,
    },
    demand: {
        enum: ["LOW", "MEDIUM", "HIGH"],
        default: "MEDIUM",
    }
})

const Graph = mongoose.model("Graph", graphSchema)

export default Graph