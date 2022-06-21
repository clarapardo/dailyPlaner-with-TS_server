import { ITask } from '@models/task-model'
import { getRandomInt } from '@shared/functions'
import orm from './mock-orm'



// Get one task
async function getOne(taskName: string): Promise<ITask | null> {
    const db = await orm.openDb()
    for (const task of db.tasks) {
        if (task.taskName === taskName) {
            return task
        }
    }
    return null
}


// See if a task with the given id exists
async function persists(id: number): Promise<boolean> {
    const db = await orm.openDb()
    for (const task of db.tasks) {
        if (task.id === id) {
            return true
        }
    }
    return false
}


// Get all tasks
async function getAll(): Promise<ITask[]> {
    const db = await orm.openDb()
    return db.tasks
}


// Get one task
async function add(task: ITask): Promise<void> {
    const db = await orm.openDb()
    task.id = getRandomInt()
    db.tasks.push(task)
    return orm.saveDb(db)
}


// Update a task
async function update(task: ITask): Promise<void> {
    const db = await orm.openDb()
    for (let i = 0; i < db.tasks.length; i++) {
        if (db.tasks[i].id === task.id) {
            db.tasks[i] = task
            return orm.saveDb(db)
        }
    }
}


// Delete one task
async function deleteOne(id: number): Promise<void> {
    const db = await orm.openDb()
    for (let i = 0; i < db.users.length; i++) {
        if (db.users[i].id === id) {
            db.users.splice(i, 1)
            return orm.saveDb(db)
        }
    }
}



export default { getOne, persists, getAll, add, update, delete: deleteOne } as const
