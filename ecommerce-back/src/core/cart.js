const { find, reject } = require('lodash')
const uuid = require('uuid/v4')

class Cart {
  constructor({ id = uuid(), items = [] } = {}) {
    Object.assign(this, { id, items })
  }
  setItems(items) {
    this.items = items
  }
  getItem(itemId) {
    return find(this.items, { id: itemId })
  }
  addItem(item) {
    this.items.push(item)
  }
  updateItem(newItem) {
    this.items = this.items.map(
      item => item.id === newItem.id ? newItem : item
    )
  }
  removeItem(item) {
    this.items = reject(this.items, { id: item.id })
  }
}

module.exports = Cart
