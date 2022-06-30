const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/toDo-list'

mongoose
    .connect(MONGO_URI)
    .then((x: any) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch((err: any) => console.error('Error connecting to mongo: ', err))