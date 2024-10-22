import mongoose from "mongoose";

const providerSchema = mongoose.Schema({
    name: {type:  String, required: true},
    email: {type:  String, required: true},
    password: {type:  String, required: true},
    machines: {type: Array, default: []},
}, {minimize: false})

const providerModel = mongoose.model.provider || mongoose.model('provider', providerSchema)

export default providerModel