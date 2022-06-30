// FOR MONGODB

import { ITask } from './../types/task'
import { model, Schema } from 'mongoose'

const taskSchema: Schema = new Schema({
    taskName: String,
    deadline: Object,
    description: String,
    category: {
        type: String,
        enum: ['health', 'social', 'work', 'workout', 'other']
    },
    status: {
        type: String,
        enum: ['toDo', 'completed'],
        default: 'toDo'
    }
},
    { timestamps: true }
)

export default model<ITask>('Task', taskSchema)
