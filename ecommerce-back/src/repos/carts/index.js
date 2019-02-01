const BaseRepository = rootRequire('repos/base-repository')
const serializer = require('./serializer')
const deserializer = require('./deserializer')

const TABLE = 'SHOPPING_CARTS'

class CartRepository extends BaseRepository {
  constructor({ db }, repos) {
    super(db, TABLE, repos, serializer, deserializer)
  }
  async find(id) {
    const { itemsRepository } = this.repos
    const cart = await super.find(id)
    const items = await itemsRepository.findForCart(cart.id)
    cart.setItems(items)
    return cart
  }
  async store(cart) {
    const { itemsRepository } = this.repos
    await super.store(cart)
    await itemsRepository.removeForCart(cart.id)
    await itemsRepository.insertForCart(cart.items, cart.id)
  }
}

module.exports = CartRepository
