import User from "../models/user.model.js";
import { generateToken } from '../lib/utils.js'

export const handleSignup = async (req, res) => {
    const { firstName, lastName, email, phone } = req.body
    if (!firstName || !lastName) return res.status(400).json({ message: "All fields are required." })
    if (!phone && !email) return res.status(400).json({ message: "All fields are required." })
    try {
        let user = null;
        if (email && phone) user = await User.findOne({ $or: [{ email }, { phone }] })
        else if (email) user = await User.findOne({ email })
        else if (phone) user = await User.findOne({ phone })
        if (user) return res.status(400).json({ message: "user already exists" });
        const newUserData = {
            firstName,
            lastName,
        };
        if (email) newUserData.email = email;
        if (phone) newUserData.phone = phone;

        const newUser = new User(newUserData);

        if (newUser) {
            await newUser.save();
            generateToken(newUser._id, res)
            return res.status(201).json({
                _id: newUser._id,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                phone: newUser.phone,
            })
        } else {
            return res.status(400).json({ message: "Invalid user data" })
        }
    } catch (error) {
        console.log('Error in signup handler : ', error.message)
        return res.status(500).json({ message: "Internal server error" })
    }
}

export const handleLogin = async (req, res) => {
    const { email, phone } = req.body
    try {
        if (!email && !phone) return res.status(400).json({ message: "Enter valid data" })
        let user = null
        if (email) user = await User.findOne({ email })
        else if (phone) user = await User.findOne({ phone })
        if (!user) return res.status(400).json({ message: "User doesn't exist" });
        generateToken(user._id, res)
        return res.status(200).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
        })
    } catch (error) {
        console.log('Error in login handler : ', error.message)
        return res.status(500).json({ message: "Internal server error" })
    }
}

export const handleLogout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 })
        res.status(200).json({ message: "Logged out successfully" })
    } catch (error) {
        console.log('Error in logout handler : ', error.message)
        return res.status(500).json({ message: "Internal server error" })
    }
}

export const checkAuth = (req, res) => {
    try {
        res.status(200).json(req.user)
    } catch (error) {
        console.log("Error in checkAuth controller : ", error.message)
        res.status(500).json({ message: "Internal server error" })
    }
}