
// // TASK SCHEMA
// export interface ITask {
//     id: number
//     taskName: string
//     deadline: object
//     description: string
//     category: Category
//     status: Status
// }

// export enum Category {
//     Health = 'health',
//     Social = 'social',
//     Work = 'work',
//     Workout = 'workout',
//     Other = 'other'
// }

// export enum Status {
//     Completed = 'completed',
//     ToDo = 'toDo'
// }



// // Get a new Task object
// function getNew(taskName: string, deadline: object, description: string, category: Category): ITask {
//     return {
//         id: -1,
//         taskName,
//         deadline,
//         description,
//         category,
//         status: Status.ToDo
//     }
// }

// // Copy a Task object
// function copy(task: ITask): ITask {
//     return {
//         id: task.id,
//         taskName: task.taskName,
//         deadline: task.deadline,
//         description: task.description,
//         category: task.category,
//         status: task.status
//     }
// }



// export default { new: getNew, copy }