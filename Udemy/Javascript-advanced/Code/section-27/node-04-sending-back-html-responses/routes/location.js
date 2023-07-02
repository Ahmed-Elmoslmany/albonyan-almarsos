const express = require('express')

const router = express.Router();

const locationStorage = {
  locations: []
}
router.post('/add-location', (res, req, next) => {
  locationStorage.locations.push({
    id: Math.random(),
    address: req.body.address,
    coords: {lat: req.body.lat, lng: req.body.lng}
  })
})

router.get('/location', (res, req, next) => {
  
})

module.exports = router