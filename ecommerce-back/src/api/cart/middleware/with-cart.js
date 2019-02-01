const withCart = services => async (req, res, next) => {
  const { cartsService } = services
  const cartId = req.params.cartid
  req.cart = await cartsService.retrieveCart(cartId)
  next()
}

module.exports = withCart
