const db = require('../config/firebase')

const COLLECTIONS = {
  trips: 'trips'
}

const insertTrip = async (tripBody) => {
  return await db
    .collection(COLLECTIONS.trips)
    .add(tripBody)
}

const getTripById = async ({ tripId }) => {
  const tripDoc = await db
    .collection(COLLECTIONS.trips)
    .doc(tripId)
    .get()
  return tripDoc.data() 
}

const getTrips = async () => {
  const tripSnap = await db
    .collection(COLLECTIONS.trips)
    .get()
  let data = []
  tripSnap.forEach( doc => {
    data.push({ id: doc.id, ...doc.data()}) 
  })
  return data
}

const deleteTripById = async ({ tripId }) => {
  return await db
    .collection(COLLECTIONS.trips)
    .doc(tripId)
    .delete()
}

const updateTrip = async (tripBody,tripId) => {
  return await db
    .collection(COLLECTIONS.trips)
    .doc(tripId)
    .update(tripBody)
}

const dbTrip = {
  insert: insertTrip,
  getById: getTripById,
  list: getTrips,
  deleteById: deleteTripById,
  update: updateTrip
}

module.exports = dbTrip