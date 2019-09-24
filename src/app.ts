import path from 'path'
import express = require('express')

// Create a new express application instance
const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })
const publicPath = path.resolve(__dirname, '../build')
const staticConf = { maxAge: '1y', etag: false }
app.use(express.static(publicPath, staticConf))

app.get('/', function (req: any, res: any) {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
