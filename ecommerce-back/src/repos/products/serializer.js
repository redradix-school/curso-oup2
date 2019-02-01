const { pick } = require('lodash')

module.exports = (cart) => {
  return pick(cart, ['id', 'title', 'price', 'img'])
}
