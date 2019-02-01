const BaseRepository = rootRequire('repos/base-repository')
const serializer = require('./serializer')
const deserializer = require('./deserializer')

const TABLE = 'products'

class ProductsRepository extends BaseRepository {
  constructor({ db }, repos) {
    super(db, TABLE, repos, serializer, deserializer)
  }
  findForCart(cartId) {
    return super.listBy({ cart_id: cartId })
  }
  async removeForCart(cartId) {
    return super.removeBy({ cart_id: cartId })
  }
  async insertForCart(items, cartId) {
    items.forEach(item => item.setCartId(cartId))
    return super.insert(items)
  }
}

module.exports = ProductsRepository
