const { Database } = require('sqlite3')

module.exports = (config) => {
  return new Database('db.sqlite3')
}
