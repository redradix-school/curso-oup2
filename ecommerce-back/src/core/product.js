const uuid = require('uuid/v4')

class Product {
  constructor(params = {}) {
    const {
      id = uuid(), title, description, category, img, available
    } = params
    Object.assign(this, {
      id, title, description, category, img, available
    })
  }
  setPrice(amount, currency) {
    this.price = { amount, currency }
  }
}

module.exports = Product
