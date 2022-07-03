import { Router } from "express"
import { allTasks, addTask, updateTask, deleteTask } from "./controllers.routes"

const router: Router = Router()

export const path = {
    get: '/all',
    add: '/add',
    update: '/update/:id',
    delete: '/delete/:id',
} as const


router.get(path.get, allTasks)
router.post(path.add, addTask)
router.put(path.update, updateTask)
router.delete(path.delete, deleteTask)



export default router