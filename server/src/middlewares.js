const http = require('http')

const notFound = (req, res, next) => {
  res.status(404)
  next(new Error)
}

const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: `${http.STATUS_CODES[statusCode]} - ${req.originalUrl}`,
    trace: process.env.APP_ENV == 'production' ? null : error.stack
  })
}

module.exports = { notFound, errorHandler }