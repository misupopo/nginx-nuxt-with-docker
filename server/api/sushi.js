const express = require('express');
const Router = express.Router;

const router = Router()

// Mock sushi
const sushi = [
  { name: 'とろ', price: 300 },
  { name: 'いか', price: 200 },
  { name: 'かっぱ巻き', price: 100 }
]

// Get all sushi
router.get('/sushi', function(req, res, next) {
  res.json(sushi)
})

// Get by Id
router.get('/sushi/:id', function(req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < sushi.length) {
    res.json(sushi[id])
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
