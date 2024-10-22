import mongoose from "mongoose";

const machineSchema = new mongoose.Schema({
    image: {type: Array, required: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    category: {type: String, required: true},
    license: {type: String, required: true},
    rent: {type: Number, required: true},
    phone: {type: Number, required: true},
})

const machineModel = mongoose.model.machine || mongoose.model("machine", machineSchema)

export default machineModel