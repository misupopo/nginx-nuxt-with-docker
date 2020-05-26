const express = require('express');
const Router = express.Router;

const router = Router()

// Mock
const oniku = [
  { name: 'ハラミ', price: 100 },
  { name: '上ハラミ', price: 1000 },
  { name: '特上ハラミ', price: 10000 }
]

// Get all
router.get('/oniku', function(req, res, next) {
  res.json(oniku)
})

// Get by Id
router.get('/oniku/:id', function(req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < oniku.length) {
    res.json(sushi[id])
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
