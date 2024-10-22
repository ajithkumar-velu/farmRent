import mongoose from "mongoose";

const formerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    cartData: {type: Object, default: {}},
}, {minimize: false})

const formerModel = mongoose.model.user || mongoose.model('former', formerSchema);

export default formerModel