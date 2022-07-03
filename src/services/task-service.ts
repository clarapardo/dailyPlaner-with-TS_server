// import taskRepo from '@repos/task-repo'
// import { ITask } from '@models/task-model'
// import { TaskNotFoundError } from '@shared/errors'



// // Get all tasks
// function getAll(): Promise<ITask[]> {
//     return taskRepo.getAll()
// }


// // Get one task
// function addOne(task: ITask): Promise<void> {
//     console.log("AQUÍ AÑADO UNA", task)
//     return taskRepo.add(task)
// }


// // Update one task
// async function updateOne(task: ITask): Promise<void> {
//     const persists = await taskRepo.persists(task.id)
//     if (!persists) {
//         throw new TaskNotFoundError()
//     }
//     return taskRepo.update(task)
// }


// // Delete a task 
// async function deleteOne(id: number): Promise<void> {
//     const persists = await taskRepo.persists(id)
//     if (!persists) {
//         throw new TaskNotFoundError()
//     }
//     return taskRepo.delete(id)
// }



// export default { getAll, addOne, updateOne, delete: deleteOne, } as const