import express, { json } from "express";
import userModel from "../models/farmerModel.js";
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import formerModel from "../models/farmerModel.js";

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

// Route for user login
const formerLognin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await formerModel.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: "Invalid Email Address" })
        }
        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = createToken(user._id)
            return res.json({ success: true, token })
        } else {
            return res.json({ success: false, message: "Invalid password" })
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }

}

// Route for user register
const formerRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const exists = await formerModel.findOne({ email })

        // check email already exists
        if (exists) {
            return res.send({ success: false, message: "Email address already exists" })
        }

        // check valid email
        if (!validator.isEmail(email)) {
            return res.send({ success: false, message: "Invalid email address" })
        }

        if (password.length < 8) {
            return res.send({ success: false, message: "Enter strong password" })
        }

        const slat = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, slat)

        const newUser = new formerModel({
            name,
            email,
            password: hashedPassword,
        })

        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({ success: true, token })

    } catch (error) {
        console.log(error);

        res.json({ success: false, message: error.message })
    }
}



export { formerLognin, formerRegister }