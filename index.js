const config = require('./config')
const logger = require('./src/logger')
const search = require('./src/search')

const express = require('express')
const app = express()

app.get(config.endPoint, async (req, res) => {
  const keyword = req.query.query
  try {
    logger.info(`Search keyword: ${keyword}`)
    res.json(await search(keyword))
  } catch (e) {
    logger.error(e)
    res.json(null)
  }
})

app.listen(config.port, () => {
  logger.info('Server started')
})
