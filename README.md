# restful-search-server

## Getting start

- Check `config.js`

```javascript
module.exports = {
  port: 8088,
  endPoint: '/YOUR_API_ENDPOINT',
  log: 'LOG_FILE_NAME_WITH_PATH'
}

// Sample
// module.exports = {
//   port: 8088,
//   endPoint: '/search',
//   log: 'D:/web.log'
// }
```

- Install dependencies & Run

```bash
npm i
node index
```

## Test

`http://localhost:port/YOUR_API_ENDPOINT?query=KEYWORD`

- CURL Request example

```bash
curl -X GET \
     -H "Content-type: application/json" \
     -d "{'query': 'cat'}" \
     http://localhost:8088/search
```
