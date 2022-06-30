// FOR MONGODB

import { Response, Request } from "express"
import { ITask } from "./../types/task"
import Task from "./../models/task.model"


// -------> Get all tasks
const allTasks = async (req: Request, res: Response): Promise<void> => {
    try {
        const tasks: ITask[] = await Task.find()
        res.status(200).json({ tasks })
    } catch (err) {
        throw err
    }
}


// -------> Add a tasks
const addTask = async (req: Request, res: Response): Promise<void> => {
    console.log("------", req.body)
    try {
        const body = req.body as Pick<ITask, "taskName" | "deadline" | "description" | "category" | "status">

        const task: ITask = new Task({
            taskName: body.taskName,
            deadline: body.deadline,
            description: body.description,
            category: body.category,
            status: body.status

        })

        const newTask: ITask = await task.save()
        const allTasks: ITask[] = await Task.find()

        res
            .status(201)
            .json({ message: "Task added", task: newTask, tasks: allTasks })

    } catch (err) {
        throw err
    }
}

// -------> Update a tasks
const updateTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const { params: { id }, body } = req

        console.log('--------', req.body)

        const updateTask: ITask | null = await Task.findByIdAndUpdate({ _id: id }, body)
        const allTodos: ITask[] = await Task.find()

        res
            .status(200)
            .json({
                message: "Task updated",
                task: updateTask,
                tasks: allTasks,
            })
    } catch (error) {
        throw error
    }
}


// -------> Delete a tasks
const deleteTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedTask: ITask | null = await Task.findByIdAndRemove(
            req.params.id
        )
        const allTask: ITask[] = await Task.find()
        res.status(200).json({
            message: "Task deleted",
            task: deletedTask,
            tasks: allTasks,
        })
    } catch (error) {
        throw error
    }
}

export { allTasks, addTask, updateTask, deleteTask }

