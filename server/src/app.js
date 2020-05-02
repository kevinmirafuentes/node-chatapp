const express = require('express')
const cors = require('cors')
const middlewares = require('./middlewares')
const router = require('./router')
const port = process.env.PORT || 8080

const app = express()

app.use(express.json())

app.use(cors({
  origin: 'http://localhost:80'
}))

app.use('/', router)

app.use(middlewares.notFound)

app.use(middlewares.errorHandler)

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})