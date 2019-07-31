const request = require('request')

// https://hn.algolia.com/api
const API_URL = 'http://hn.algolia.com/api/v1/search?query='
const REQUEST_OPTION = {}

const search = keyword => {
  return new Promise((resolve, reject) => {
    request.get(API_URL + keyword,
      REQUEST_OPTION,
      (err, _, body) => {
      if (err) {
        reject(err)
      } else {
        resolve(body)
      }
    })
  })
}

module.exports = search
