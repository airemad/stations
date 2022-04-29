<p align="center"><h1 align="center">
  @airemad/stations
</h1>

<p align="center">
  List of the measurement stations available in Madrid
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/@airemad/stations"><img src="https://badgen.net/npm/v/@airemad/stations" alt="npm version"/></a>
  <a href="https://www.npmjs.org/package/@airemad/stations"><img src="https://badgen.net/npm/license/@airemad/stations" alt="license"/></a>
  <a href="https://www.npmjs.org/package/@airemad/stations"><img src="https://badgen.net/npm/dt/@airemad/stations" alt="downloads"/></a>
  <a href="https://snyk.io/test/github/airemad/stations"><img src="https://snyk.io/test/github/airemad/stations/badge.svg" alt="Known Vulnerabilities"/></a>
</p>


# About

List of the measurement stations available in Madrid

## ❤️ Awesome Features:
- Zero dependencies 🥷
- Out of the box simple Interface. 🔥
- Based on Json Schemas 🧐
- Easy to use and great test coverage ✅

## Installation

```bash
npm install @airemad/stations
```

## Usage
```js
const { getAll } = require('@airemad/stations')

const stations = getAll()
console.log(stations)
/*
[
    ...,
    {
        "id": "86",
        "uuid": "271a6e0a-9d62-49cd-a772-57c1b492441f",
        "name": "Tres Olivos",
        "altitude": 715,
        "coordinates": {
            "ed50": [40.5005555555556, -3.68972222222222],  // Lat, Lon
            "wgs84": [40.5005477, -3.6897308]               // Lat, Lon
        },
        "additionDate": "2010-02-08",                       //Format: YEAR-MM-DD
        "isActive": true,
        "isAcustic": true,
        "acusticAvailableValues": ["LAEQ", "LAS01", "LAS10", "LAS50", "LAS90", "LAS99"]
    }
]
*/
```

## Built With

Development only:

- [Standard](https://www.npmjs.com/package/standard) - Linting propuses
- [Husky](https://www.npmjs.com/package/husky) - Git Hooks
- [Commitlint](https://www.npmjs.com/package/@commitlint/cli) - Linting commit messages
- [Jest](https://www.npmjs.com/package/jest) - Testing
- [Standard](https://www.npmjs.com/package/standard) - Linting
- [Standard-version](https://www.npmjs.com/package/standard-version) - Manage changelog and releases
- [ajv](https://www.npmjs.com/package/ajv) - Json Schemas
- [ajv-formats](https://www.npmjs.com/package/ajv-formats) - Extend Json Schemas

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/airemad/stations/tags).

## Authors

- **Ulises Gascón** - Initial work- - [@ulisesGascon](https://github.com/ulisesGascon)

See also the list of [contributors](https://github.com/airemad/stations/contributors) who participated in this project.

## License

This project is licensed under the GNU AGPL3.0 License - see the [LICENSE.md](LICENSE.md) file for details

## Data sources

We use [Madrid Datos Abiertos](https://datos.madrid.es/portal/site/egob):
- [Dataset: Contaminación acústica. Estaciones de medida](https://datos.madrid.es/portal/site/egob/menuitem.c05c1f754a33a9fbe4b2e4b284f1a5a0/?vgnextoid=b05a79ea1770b410VgnVCM1000000b205a0aRCRD&vgnextchannel=374512b9ace9f310VgnVCM100000171f5a0aRCRD&vgnextfmt=default)
