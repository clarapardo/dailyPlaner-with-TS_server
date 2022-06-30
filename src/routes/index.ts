import { Router } from "express"
import { allTasks, addTask, updateTask, deleteTask } from "./controllers"

const router: Router = Router()

router.get("/tasks", allTasks)

router.post("/add-task", addTask)

router.put("/edit-task/:id", updateTask)

router.delete("/delete-task/:id", deleteTask)

export default router