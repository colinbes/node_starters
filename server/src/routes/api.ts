var express = require('express')
var router = express.Router()

router.get('/username', (req, res) => {
  res.json({name: 'Bob'})
})

module.exports = router