import express from 'express'
import { providerLogin } from '../controller/providerController.js'


const providerRouter = express.Router()

providerRouter.post('/login', providerLogin)
// providerRouter.post('/register', providerRegister)

export default providerRouter