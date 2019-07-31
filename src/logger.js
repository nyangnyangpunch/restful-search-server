const config = require('../config')

const fs = require('fs')

const writer = (...args) => {
  fs.writeFile(
    config.log,
    args.join(' ') + '\n', {
      flag: 'a'
    }, _err => void 0)
}

const Logger = {}
Logger.info = (...args) => {
  console.log('INFO:', ...args)
  writer('INFO:', ...args)
}

Logger.error = (...args) => {
  console.error('ERROR: ', ...args)
  writer('ERROR: ',...args)
}

module.exports = Logger
