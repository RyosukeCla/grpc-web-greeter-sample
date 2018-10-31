const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express()

const serveFile = (filepath) => (req, res, next) => {
  fs.readFile(filepath, function(err, data) {
    if (err) {
      res.writeHead(404, 'Not Found')
      res.write('404: File Not Found!')
      return res.end()
    }

    res.statusCode = 200

    res.write(data)
    return res.end()
  })
}

app.get('/', serveFile(path.resolve(__dirname, './index.html')))
app.get('/main.js', serveFile(path.resolve(__dirname, './dist/main.js')))

const port = '8081'
app.listen(port, () => console.log(`Example app listening on ${port}!`))
