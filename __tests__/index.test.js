const { getAll } = require('../src')
const stations = require('../src/stations.json')
const schema = require('../src/schema.json')

const Ajv = require('ajv')
const addFormats = require('ajv-formats')

const ajv = new Ajv()
addFormats(ajv)

describe('Stations dataset', () => {
  it('Should follow the json schema', () => {
    const validate = ajv.compile(schema)
    const valid = validate(stations)
    expect(valid).toEqual(true)
    expect(validate.errors).toEqual(null)
  })

  it('Should have unique stations', () => {
    const ids = new Set(stations.map(({ id }) => id))
    expect(ids.size).toBe(stations.length)
  })

  it('Should have unique uuids', () => {
    const uuids = new Set(stations.map(({ uuid }) => uuid))
    expect(uuids.size).toBe(stations.length)
  })
})

describe('Stations methods', () => {
  it('Should return all the stations', () => {
    expect(getAll()).toStrictEqual(stations)
  })
})
