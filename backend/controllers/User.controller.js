
import User from "../models/User.model.js"

export const getUser = async (req, res) => {
    try {
        const users = await User.find({})
        return res.status(200).json({
            message: "All users",
            users,  
        });
    } catch (error) {
        return res.status(500).json({
            message: `error : ${error.message}`
        })
    }
}


export const postUser = async (req, res) => {
    try {
        const { first_name, last_name, email } = req.body
        if (!first_name || !last_name || !email)
            return res.status().json({
                message: "All fields required",
            })
        const user = await User.create({
            first_name, last_name, email
        })
        return res.status(200).json({
            "message": "User created",
            user
        })
    } catch (error) {
        return res.status(500).json({
            message: `error : ${error.message}`
        })
    }
}


export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        await User.findOneAndDelete({ _id:id })
        return res.status(200).json({
            "message": "User  deleted"
        })
    } catch (error) {
        return res.status(500).json({
            message: `error : ${error.message}`
        })
    }
}