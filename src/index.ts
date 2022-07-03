import 'dotenv/config'
import './db'
import express, { Express } from "express"
import taskRoutes from "./routes/index.routes"

const app: Express = express()
require("./config")(app)

app.use('/api', taskRoutes)

const PORT = process.env.PORT || 5005

app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}`))



module.exports = app