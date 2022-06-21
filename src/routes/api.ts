import { Router } from 'express'
import taskRouter from './task-router'


const baseRouter = Router()

baseRouter.use('/tasks', taskRouter)


export default baseRouter