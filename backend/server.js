const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()

const routes = require('./routes/TestingRoutes')
const drives = require('./routes/AddDrivesRoutes')

const cors = require('cors')

const app = express()
const PORT = process.env.PORT | 5200

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Mongodb connected"))
    .catch((err) => console.log(err));

app.use('/api', routes)
app.use('/api', drives)

app.listen(PORT, () => console.log(`Listening at ${PORT}`))

