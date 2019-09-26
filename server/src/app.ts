import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'

const app = express()
var api = require('./routes/api')

const publicPath = path.resolve(__dirname, '../build')
const staticConf = { maxAge: '1y', etag: false }
app.use(express.static(publicPath, staticConf))

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use('/api', api)

app.get('/', function (req: any, res: any) {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
