import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        requried: true,
    },
    lastName: {
        type: String,
        requried: true,
    },
    email: {
        type: String,
        requried: true,
        unique: true,
    },
    phone: {
        type: Number,
        requried: true,
        unique: true,
    },
    password: {
        type: String,
        default: '',
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER",
    }
})

const User = mongoose.model("User", userSchema);

export default User