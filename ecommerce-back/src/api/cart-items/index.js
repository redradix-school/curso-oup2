const { Router } = require('express')
const withCart = rootRequire('api/cart/middleware/with-cart')

module.exports = (config, services) => {
  const cartItemsRouter = Router({ mergeParams: true })

  cartItemsRouter.post('/', withCart(services), async (req, res) => {
    const { cartsService, productsService } = services
    try {
      const { cart, body: { id, quantity } } = req
      const product = await productsService.retrieveProduct(id)
      await cartsService.addProductToCart(cart, product, quantity)
      res.json(cart)
    } catch (e) {
      res.status(500).send(e.message)
    }
  })

  cartItemsRouter.put('/:itemid', withCart(services), async (req, res) => {
    const { cartsService } = services
    try {
      const { cart, params: { itemid }, body: { quantity } } = req
      await cartsService.modifyItemQuantity(cart, itemid, quantity)
      res.json(cart)
    } catch (e) {
      res.status(500).send(e.message)
    }
  })

  cartItemsRouter.delete('/:itemid', withCart(services), async (req, res) => {
    const { cartsService } = services
    try {
      const { cart, params: { itemid } } = req
      await cartsService.removeItemFromCart(cart, itemid)
      res.json(cart)
    } catch (e) {
      res.status(500).send(e.message)
    }
  })

  return cartItemsRouter
}
