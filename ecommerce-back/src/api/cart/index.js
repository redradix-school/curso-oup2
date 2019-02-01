const { Router } = require('express')
const withCart = rootRequire('api/cart/middleware/with-cart')

module.exports = (config, services) => {
  const cartRouter = Router()

  cartRouter.post('/', async (req, res) => {
    const { cartsService } = services
    try {
      const cart = await cartsService.createNewCart()
      res.json(cart)
    } catch (e) {
      res.status(500).send(e.message)
    }
  })

  cartRouter.get('/:cartid', withCart(services), (req, res) => {
    res.json(req.cart)
  })

  cartRouter.post('/:cartid/checkout', withCart(services), (req, res) => {
    const { cartsService } = services
    console.log('CHECKOUT!', req.cart.id)
    try {
      const cart = cartsService.createNewCart()
      res.json(cart)
    } catch (e) {
      res.status(500).send(e.message)
    }
  })

  return cartRouter
}
