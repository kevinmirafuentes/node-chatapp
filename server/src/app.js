const express = require('express')
const cors = require('cors')
const router = require('./router')
const mongoose = require('mongoose')
const port = process.env.PORT || 8080

const middlewares = require('./middlewares')

const databaseUrl = process.env.DATABASE_URL || 'mongodb://0.0.0.0:27017/chatapp'
mongoose.connect(databaseUrl, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const app = express()

app.use(express.json())

app.use(cors({
  origin: 'http://localhost:3001'
}))

app.use('/', router)

app.use(middlewares.notFound)

app.use(middlewares.errorHandler)

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})