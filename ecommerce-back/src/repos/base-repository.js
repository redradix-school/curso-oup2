const { fromNode } = require('bluebird')
const { keys, values, zip } = require('lodash')
const PAGE_SIZE = 8

class BaseRepository {
  constructor(db, table, repos, serializer, deserializer) {
    Object.assign(this, { db, table, repos, serializer, deserializer })
  }

  async find(id) {
    const rowData = await fromNode(cb => this.db.get(
      `SELECT * FROM ${this.table} WHERE id=?`, id, cb
    ))
    return this.deserializer(rowData)
  }

  async listPage(pageNumber) {
    const limit = PAGE_SIZE
    const offset = (pageNumber - 1) * PAGE_SIZE
    const rowData = await fromNode(cb => this.db.all(
      `SELECT * FROM ${this.table} LIMIT ? OFFSET ?`, limit, offset, cb
    ))
    const { count } = await fromNode(cb => this.db.get(
      `SELECT count(*) as count FROM ${this.table}`, cb
    ))
    const totalPages = Math.ceil(count / PAGE_SIZE)
    const results = rowData.map(this.deserializer)
    return {
      perPage: PAGE_SIZE,
      pageNumber,
      totalPages,
      results
    }
  }

  async listBy(colValues) {
    const ks = keys(colValues)
    const vs = values(colValues)
    const q = `SELECT * FROM ${this.table} WHERE ${ks.map(k => `${k}=?`)}`
    const rowData = await fromNode(cb => this.db.all(q, ...vs, cb))
    return rowData.map(this.deserializer)
  }

  async store(domainObject) {
    const rowData = this.serializer(domainObject)
    const ks = keys(rowData)
    const vs = values(rowData)
    const q = `
       INSERT INTO ${this.table}(${ks.join(', ')})
       VALUES(${vs.map(() => '?').join(', ')})
       ON CONFLICT(id) DO UPDATE SET
       ${ks.map(key => `${key}=?`)}`
    await fromNode(cb => this.db.run(q, ...vs, ...vs, cb))
  }

  async insert(domainObjects) {
    const rowValuesList = domainObjects.map(this.serializer)
    for (const rowValues of rowValuesList) {
      const ks = keys(rowValues)
      const vs = values(rowValues)
      const q = `INSERT INTO ${this.table} (${ks.join(',')}) VALUES (${vs.map(() => '?')})`
      await fromNode(cb => this.db.run(q, ...vs, cb))
    }
  }

  async removeBy(colValues) {
    const ks = keys(colValues)
    const vs = values(colValues)
    const q = `DELETE FROM ${this.table} WHERE ${ks.map(k => `${k}=?`)}`
    await fromNode(cb => this.db.all(q, ...vs, cb))
  }

  async randomSample(limit) {
    const results = fromNode(cb => (
      this.db.all(`SELECT * FROM ${this.table} ORDER BY RANDOM() LIMIT ?`, limit, cb)
    ))
    return results.map(this.deserializer)
  }

}

module.exports = BaseRepository
