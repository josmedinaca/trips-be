const express = require('express')
const router = express.Router()

const createTrip = require('../controllers/trips/create-trip')
const getTrip = require('../controllers/trips/get-trip')
const listTrips = require('../controllers/trips/list-trips')
const deleteTrip = require('../controllers/trips/delete-trip')
const updateTrip = require('../controllers/trips/update-trip')

router.get('/trip/:tripId', getTrip)
router.post('/trip', createTrip)
router.get('/trip', listTrips)
router.delete('/trip/:tripId', deleteTrip)
router.patch('/trip/:tripId', updateTrip)

module.exports = router