import express from 'express'
import { addMachine, allMachines, getAllMachines, removeMachine, test } from '../controller/machineController.js'
import upload from '../middleware/multer.js'
const machineRouter = express.Router()

machineRouter.post('/add', upload.fields([{name: "image", maxCount: 1}]), addMachine)
machineRouter.get("/all", allMachines)
machineRouter.post('/remove', upload.fields([{name: "val", maxCount: 1}]), removeMachine)
machineRouter.post('/test', test)
machineRouter.get("/", getAllMachines)
export default machineRouter