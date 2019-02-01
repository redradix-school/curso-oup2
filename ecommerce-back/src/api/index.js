const express = require('express')
// router
const productsRouter = rootRequire('api/products')
const cartRouter = rootRequire('api/cart')
const cartItemsRouter = rootRequire('api/cart-items')

module.exports = (config, services) => {
  const app = express()

  app.use(express.json())
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
      'Access-Control-Allow-Methods',
      'GET, PUT, POST, DELETE'
    )
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
  })

  app.use('/products', productsRouter(config, services))
  app.use('/cart', cartRouter(config, services))
  app.use('/cart/:cartid/items', cartItemsRouter(config, services))

  app.listen(config.port)
  return app
}
