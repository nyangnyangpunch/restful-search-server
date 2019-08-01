const config = require('./config')
const logger = require('./src/logger')
const search = require('./src/search')

const express = require('express')
const app = express()

// Uncaught exception handler 
process.on('uncaughtException', logger.error)

// Set allow CORS
if (config.cors) {
  logger.info('CONFIG: CORS allowed')
  app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    next()
  })
}

// API Route and handler
app.get(config.endPoint, async (req, res) => {
  const keyword = req.query.query
  res.setHeader('content-type', ['application/json', 'charset=utf-8'])
  try {
    // Keyword search
    logger.info(`Search keyword: ${keyword}`)

    // Set response header
    res.write(await search(keyword))
    res.end()
  } catch (e) {
    // Error
    logger.error(e)
    res.write(null)
  }
  res.end()
})

// LISTEN (Server start)
app.listen(config.port, () => {
  logger.info('Server started')
})
