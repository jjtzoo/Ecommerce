import User from "../models/userModel.js"

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use"})
        }

        const user = await User.create({
            name,
            email,
            password
        });

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            createdAt: user.createdAt,
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error. Please try again later."})
    }
};