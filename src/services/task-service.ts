import taskRepo from '@repos/task-repo'
import { ITask } from '@models/task-model'
import { UserNotFoundError } from '@shared/errors'



// Get all tasks
function getAll(): Promise<ITask[]> {
    return taskRepo.getAll()
}


// Get one task
function addOne(user: ITask): Promise<void> {
    return taskRepo.add(user)
}


// Update one task
async function updateOne(user: ITask): Promise<void> {
    const persists = await taskRepo.persists(user.id)
    if (!persists) {
        throw new UserNotFoundError()
    }
    return taskRepo.update(user)
}


// Delete a task 
async function deleteOne(id: number): Promise<void> {
    const persists = await taskRepo.persists(id)
    if (!persists) {
        throw new UserNotFoundError()
    }
    return taskRepo.delete(id)
}



export default { getAll, addOne, updateOne, delete: deleteOne, } as const