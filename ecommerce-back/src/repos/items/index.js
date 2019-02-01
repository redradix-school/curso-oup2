const BaseRepository = rootRequire('repos/base-repository')
const serializer = require('./serializer')
const deserializer = require('./deserializer')

const TABLE = 'shopping_cart_items'

class ItemsRepository extends BaseRepository {
  constructor({ db }, repos) {
    super(db, TABLE, repos, serializer, deserializer)
  }
  async findForCart(cartId) {
    const { productsRepository } = this.repos
    const items = await super.listBy({ cart_id: cartId })
    for (const item of items) {
      const product = await productsRepository.find(item.id)
      item.setProduct(product)
    }
    return items
  }
  async removeForCart(cartId) {
    return super.removeBy({ cart_id: cartId })
  }
  async insertForCart(items, cartId) {
    items.forEach(item => item.setCartId(cartId))
    return super.insert(items)
  }
}

module.exports = ItemsRepository
