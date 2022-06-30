import StatusCodes from 'http-status-codes'
import { Request, Response, Router } from 'express'

import taskService from '@services/task-service'
import { ParamMissingError } from '@shared/errors'



// Constants
const router = Router()
const { CREATED, OK } = StatusCodes

// Paths
export const p = {
    get: '/all',
    add: '/add',
    update: '/update',
    delete: '/delete/:id',
} as const


// ---------> Get all tasks
router.get(p.get, async (_req: Request, res: Response) => {
    const tasks = await taskService.getAll()
    return res.status(OK).json({ tasks })
})


// ---------> Add one task
router.post(p.add, async (req: Request, res: Response) => {
    const { task } = req.body

    // Check param
    if (!task) {
        throw new ParamMissingError()
    }
    // Fetch data
    await taskService.addOne(task)
    return res.status(CREATED).end()
})


// ---------> Update one task
router.put(p.update, async (req: Request, res: Response) => {
    const { tasks } = req.body
    // Check param
    if (!tasks) {
        throw new ParamMissingError()
    }
    // Fetch data
    await taskService.updateOne(tasks)
    return res.status(OK).end()
})


// ---------> Delete one task
router.delete(p.delete, async (req: Request, res: Response) => {
    const { id } = req.params
    // Check param
    if (!id) {
        throw new ParamMissingError()
    }
    // Fetch data
    await taskService.delete(Number(id))
    return res.status(OK).end()
})


export default router