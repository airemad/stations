const stations = require('./stations.json')

const getStationById = id => {
  const selectedStation = stations.filter(station => {
    return id === station.id || parseInt(id) === parseInt(station.id)
  })

  return selectedStation.length ? selectedStation[0] : null
}

module.exports = {
  getAll: () => stations,
  getStationById
}
