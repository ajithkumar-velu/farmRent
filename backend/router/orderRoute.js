import express from 'express'
import { allOrders, placeOrder, placeOrderStrip, updatePayment, updateStatus, userOrders, verifyStripe } from '../controller/orderController.js'
import userAuth from '../middleware/userAuth.js'
import providerAuth from '../middleware/providerAuth.js'

const orderRoute = express.Router()

// admin
orderRoute.get('/list', providerAuth, allOrders)
orderRoute.post('/status', providerAuth, updateStatus)
orderRoute.post('/paymentDone', providerAuth, updatePayment)

// payment
orderRoute.post("/place", userAuth, placeOrder)
orderRoute.get("/userOrders", userAuth, userOrders)
orderRoute.post('/stripe', userAuth, placeOrderStrip)

// verifiy payment 
orderRoute.post('/verifyStripe', userAuth, verifyStripe)
export default orderRoute