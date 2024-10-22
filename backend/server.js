import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import userRouter from "./router/formerRoute.js"
// import productRouter from "./router/productRoute.js"
import machineRouter from "./router/machineRoute.js"
import connectCloudinary from "./config/cloudinary.js"
import providerRouter from "./router/providerRoute.js"
import formerRouter from "./router/formerRoute.js"
import orderRoute from "./router/orderRoute.js"


const app = express()
const port = process.env.PORT || 3000
connectDB()
connectCloudinary()

app.use(express.json())
app.use(cors())



app.use('/api/farmer', formerRouter)
// app.use('/api/product', productRouter)
app.use('/api/machine', machineRouter)


// provider 
app.use('/api/provider', providerRouter)
app.use('/api/order', orderRoute)

app.get('/', (req, res)=>{


    console.log("hi")

    
    res.send("API is working")
})

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
    
})
