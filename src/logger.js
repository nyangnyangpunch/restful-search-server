const config = require('../config')

const fs = require('fs')

const Logger = {}
Logger._timestamp = () => {

  function pad (t, s, w = '0') {
    t = t.toString()
    while (t.length < s) t = w + t
    return t
  }

  const _ = new Date()
  const yyyy = pad(_.getFullYear(), 4)
  const MM = pad(_.getMonth() + 1, 2)
  const dd = pad(_.getDate(), 2)
  const hh = pad(_.getHours(), 2)
  const mm = pad(_.getMinutes(), 2)
  const ss = pad(_.getSeconds(), 2)
  const ms = pad(_.getMilliseconds(), 3)

  return `${yyyy}.${MM}.${dd} ${hh}:${mm}:${ss}.${ms} `
}

Logger._msg = function (...args) {
  return this._timestamp() + args.join(' ')
}

Logger._writer = msg => {
  fs.writeFile(
    config.log,
    msg + '\n', {
      flag: 'a'
    }, _err => void 0)
}

Logger.info = function (...args) {
  const msg = this._msg('INFO -', ...args)
  console.log(msg)
  this._writer(msg)
}

Logger.error = function (...args) {
  const msg = this._msg('ERROR -', ...args)
  console.error(msg)
  this._writer(msg)
}

module.exports = Logger
