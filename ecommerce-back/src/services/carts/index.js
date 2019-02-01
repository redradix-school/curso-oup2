const Cart = rootRequire('core/cart')
const Item = rootRequire('core/item')

module.exports = (infra, repos, services) => ({

  async createNewCart() {
    const { cartsRepository } = repos
    const cart = new Cart()
    try {
      await cartsRepository.store(cart)
      return cart
    } catch (e) {
      services.errorsService.report(e)
      throw e
    }
  },

  async retrieveCart(cartId) {
    const { cartsRepository } = repos
    try {
      return cartsRepository.find(cartId)
    } catch (e) {
      console.error(e)
      services.errorsService.report(e)
      throw e
    }
  },

  async addProductToCart(cart, product, quantity) {
    const { cartsRepository, productsRepository } = repos
    const { productsService } = services
    try {
      const item = new Item(product, quantity)
      await productsService.reserveInventory(product, item.quantity)
      cart.addItem(item)
      await cartsRepository.store(cart)
      return cart
    } catch (e) {
      services.errorsService.report(e)
      throw e
    }
  },

  async removeItemFromCart(cart, itemId) {
    const { cartsRepository, productsRepository } = repos
    const { productsService } = services
    try {
      const item = cart.getItem(itemId)
      const product = await productsRepository.find(item.id)
      await productsService.freeInventory(product, item.quantity)
      cart.removeItem(item)
      await cartsRepository.store(cart)
      return cart
    } catch (e) {
      services.errorsService.report(e)
      throw e
    }
  },

  async modifyItemQuantity(cart, itemId, quantity) {
    const { cartsRepository, productsRepository } = repos
    const { productsService } = services
    try {
      const item = cart.getItem(itemId)
      const product = await productsRepository.find(item.id)
      const quantityDiff =  quantity - item.quantity
      if (quantityDiff > 0) {
        await productsService.reserveInventory(product, quantityDiff)
      } else if (quantityDiff < 0) {
        await productsService.freeInventory(product, Math.abs(quantityDiff))
      }
      item.setQuantity(quantity)
      cart.updateItem(item)
      await cartsRepository.store(cart)
      return cart
    } catch (e) {
      services.errorsService.report(e)
      throw e
    }
  },

  async checkoutCart(cart, checkoutFormValues) {
    const { cartsRepository } = repos
    try {
      // create order, remove from inventory, etc...
      // ...
    } catch (e) {
      services.errorsService.report(e)
      throw e
    }
  }

})
