// import './pre-start' // Must be the first import
// import logger from 'jet-logger'
// // import server from './server'

// import 'dotenv/config'
// import './db'

// import express, { Express } from "express"
// import taskRoutes from "./routes"

// const app: Express = express()

// app.use('/api', taskRoutes)

// // require('./config')(app)
// // require('./error-handling')(app)

// const PORT = process.env.PORT || 1111

// app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}`))


// // Constants
// const serverStartMsg = 'Express server started on port: ', port = (process.env.PORT || 3000)

// // Start server
// app.listen(port, () => {
//     logger.info(serverStartMsg + port)
// })

import 'dotenv/config'
import './db'
import express, { Express } from "express"
import taskRoutes from "./routes"

const app: Express = express()

app.use('/api', taskRoutes)

// require('./config')(app)
// require('./error-handling')(app)

const PORT = process.env.PORT || 1111

app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}`))



module.exports = app