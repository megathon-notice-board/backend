
let mongoose = require('mongoose')
var Schema = mongoose.Schema;

const server = 'localhost:27017'; // database url
const database = 'doctorData'; // database name

class Database {
  constructor() {
    this._connect()
  }

  _connect() {
      mongoose.connect(`mongodb://${server}/${database}`)
        .then(() => {
          console.log('Database connection successful')
        })
        .catch(err => {
          console.error('Database connection error')
          console.log(err)
        })
    }
}

module.exports = new Database()