const config = require('./config')
const logger = require('./src/logger')
const search = require('./src/search')

const express = require('express')
const app = express()

process.on('uncaughtException', logger.error)

app.get(config.endPoint, async (req, res) => {
  const keyword = req.query.query
  try {
    logger.info(`Search keyword: ${keyword}`)
    res.setHeader('content-type', ['text/json', 'charset=utf-8'])
    res.write(await search(keyword))
    res.end()
  } catch (e) {
    logger.error(e)
    res.json(null)
  }
})

app.listen(config.port, () => {
  logger.info('Server started')
})
