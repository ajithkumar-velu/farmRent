import express from "express";
import { formerLognin, formerRegister } from "../controller/formerController.js";

const formerRouter = express.Router()

formerRouter.post('/register', formerRegister)
formerRouter.post('/login', formerLognin)


export default formerRouter

