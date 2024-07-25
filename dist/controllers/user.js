import { User } from "../models/user.js";
export const newUser = async (req, res, next) => {
    try {
        const { name, email, photo, gender, role, _id } = req.body;
        const user = await User.create({
            name,
            email,
            photo,
            gender,
            role,
            _id,
        });
        return res.status(200).json({
            success: true,
            message: "Welcome",
        });
    }
    catch (error) {
        return res.status(200).json({
            success: false,
            message: error,
        });
    }
};
