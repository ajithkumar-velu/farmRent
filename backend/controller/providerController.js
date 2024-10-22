import validator from "validator";
import providerModel from "../models/providerModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const createToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET)
}

// function for Provider login
const providerLogin = async (req, res) => {
    try {

        const { email, password } = req.body;

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password, process.env.JWT_SECRET)
            res.json({success: true, token})
        }else{
            res.json({success: false, message: "Invalid username or password"})
        }

        // const provider = await providerModel.findOne({email})

        // if(!provider){
        //     return res.json({success: false, message: "User doesn't found"})
        // }

        // const isMach = await bcrypt.compare(password, provider.password)

        // if(isMach){
        //     const token = createToken(provider._id)
        //     return res.json({success: true, message: "Login successfully", token})
        // }else{
        //     return res.json({success: false, message: "Invalid Password"})
        // }
        

    } catch (error) {
        console.log(error);
        res.json({success: false,  message: error.message})
    }
}

// const providerRegister = async (req, res) =>{
//     try {
//         const   {name, email, password } = req.body;


//         const exists = await providerModel.findOne({email})

//         if(exists){
//             return res.json({success: false, message: "User already exists"})
//         }
//         if(!validator.isEmail(email)){
//             return res.json({success: false, message: "Invalid email address"})
//         }
//         if(password.length < 8){
//             return res.json({success: false, message: "Password must be length 8"})
//         }

//         const salt = await bcrypt.genSalt(10)
//         const hashedPassword = await bcrypt.hash(password, salt)

//         const newProvider = new providerModel({
//             name,
//             email,
//             password: hashedPassword
//         })
//         const provider = await newProvider.save()

//         const token = createToken(provider._id)
//         res.json({success: true, message: "Register successfully"}, token)
        
//     } catch (error) {
//         console.log(error);
//         res.json({success: false,  message: error.message})
//     }
// }

export { providerLogin }