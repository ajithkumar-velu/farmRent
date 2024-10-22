import orderModel from "../models/orderModel.js";
import Stripe from 'stripe'


const currency = "inr"
const deliveryCharge = 99

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// place order using COD
const placeOrder = async (req, res)=>{
    try {

        const { userId, item, address, amount, bookedDate} = req.body;
        console.log(userId);
        
        const orderData = {
            userId,
            item,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now(),
            bookedDate,
        }

        const order = new orderModel(orderData)
        await order.save()

        res.json({success: true, message: "orderPlaced"})
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

// userorders 
const userOrders = async (req, res) =>{
    try {
        const { userId } = req.body
        const orders = await orderModel.find({userId})
        res.json({success: true, orders})
        console.log(orders);
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
} 

const updateStatus = async (req, res) =>{
    try {
        const { orderId, status } = req.body;
        await orderModel.findByIdAndUpdate(orderId, {status})
        res.json({success: true, message: "Status Updted"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

// update payment
const updatePayment = async (req, res)=>{
    try {
        const {orderId} = req.body
        await orderModel.findByIdAndUpdate(orderId, {payment: true})
        res.json({success: true, message: "Payment Updated"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

// All orders data for Admin
const allOrders = async (req, res) =>{
    try {
        const orders = await orderModel.find({})
        res.json({success: true, orders})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

// place order using Strip method

const placeOrderStrip = async (req, res) =>{
    try {
        const { origin } = req.headers
        const { userId, item, address, amount, bookedDate} = req.body;
        console.log(userId);
        
        const orderData = {
            userId,
            item,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now(),
            bookedDate,
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        const line_items = {
            price_data: {
                currency: currency,
                product_data: {
                    name: item.name
                },
                unit_amount: item.rent * 100
            }
        }
        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode: 'payment'
        })
        res.json({success: true, session_url: session.url})
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

const verifyStripe = async ( req, res) =>{
    const { orderId, success, userId} = req.body
    try {
        if (success === "true"){
            await orderModel.findByIdAndUpdate(orderId, {payment: true});
            await userModel.findByIdAndUpdate(userId, {cartData: {}})
            res.json({success: true})
        }else{
            await orderModel.findByIdAndDelete(orderId)
            res.json({success: false})
        }
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}


export {placeOrder, userOrders, allOrders, updateStatus, updatePayment, placeOrderStrip, verifyStripe}