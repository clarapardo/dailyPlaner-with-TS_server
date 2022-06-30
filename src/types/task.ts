import { Document } from "mongoose"

export interface ITask extends Document {
    taskName: String,
    deadline: Object,
    description: String,
    category: String,
    status: String
}