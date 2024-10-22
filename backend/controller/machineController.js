import { v2 as cloudinary } from 'cloudinary'
import machineModel from "../models/machineModel.js";
import jwt from 'jsonwebtoken'
import providerModel from '../models/providerModel.js';

// generateCustomId
const generateCustomId = () => {
    const timeStamp = Date.now()
    const randomPart = Math.floor(Math.random() * 10000)
    return `${timeStamp}-${randomPart}` ;
}

// function for add machine
const addMachine = async (req, res) => {
    try {
        const { name, description, category, license, rent, phone } = req.body;
        const image1 = req.files.image && req.files.image[0]

        const { token1 } = req.headers;

        const token_decode = jwt.verify(token1, process.env.JWT_SECRET)
        // console.log("Final ", token_decode.id);

        // const addToProviderInfo = await providerModel.findById(token_decode.id)


        // addToProviderInfo.machines = {"name": "summa"}
        // console.log(addToProviderInfo.machines);


        const imageUrl = await cloudinary.uploader.upload(image1.path, async (error, result) => {
            if (error) {
                console.error('Error uploading image:', error);
            }
        });

        const url = imageUrl.secure_url


        const machineData = {
            name,
            description,
            category,
            license,
            rent,
            image: url,
            phone,
        }

        // const updateProviderMachines = await providerModel.findOneAndUpdate({ _id: token_decode.id }, { $push: { machines: machineData } })

        const newMachine = new machineModel(machineData)
        await newMachine.save()

        res.json({
            success: true, message: "added successfully", newMachine
        })




    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

// const getMachines = async (req, res) => {
//     try {
//         const { test } = req.body;

//         console.log(test);
//         res.json({ succes: true, test })

//     } catch (error) {

//     }
// }

const allMachines = async (req, res) => {
    const { token1 } = req.headers
    // if(!token1){
    //     return res.json({success: false, message: "Not Authorized, Login Again!"})
    // }
    try {

        // const token_decode = jwt.verify(token1, process.env.JWT_SECRET)



        // const myMachines = await providerModel.findById(token_decode.id)

        const machines = await machineModel.find({})
       
        res.json({success: true, machines})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}


const removeMachine = async (req, res)=>{
    try {
        
        // await machineModel.findByIdAndDelete(req.body.id)

        // let { val } = req.body
        // const { token1 } = req.headers;

        // val = Number(val)
        
        // const token_decode = jwt.verify(token1, process.env.JWT_SECRET)
        
        // const fetchProvider = await providerModel.findById(token_decode.id)
        

        // const machine = await fetchProvider.machines.filter((item, index)=> {
        //    return val !== index
        // })

        
        // fetchProvider.machines = machine
        // await fetchProvider.save()
        
        // console.log(machine);
        

        // await providerModel.findById({})

        await machineModel.findByIdAndDelete(req.body.val)

        res.json({success: true, message: "Machine removed"})

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

const test = async (req, res)=>{
    
    

    const id = generateCustomId()
    res.json({id})
}

// function for get all machines
const getAllMachines = async (req, res) =>{
    try {
        const allUsers = await providerModel.find({})


        res.json({success: true, allUsers})
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export { addMachine, allMachines, removeMachine, test, getAllMachines }