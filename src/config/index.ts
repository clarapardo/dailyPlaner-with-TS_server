import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import express from 'express'
import cors from 'cors'


module.exports = (app: any) => {
    app.set("trust proxy", 1)

    app.use(cors({
        credentials: true,
        origin: process.env.ORIGIN || "http://localhost:3000"
    }))

    app.use(morgan("dev"))
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use(cookieParser())
}