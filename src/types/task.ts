import { Document } from "mongoose"

export interface ITask extends Document {
    taskName: String,
    deadline: Date,
    description: String,
    category: String,
    status: String
}