const { Router } = require('express')

module.exports = (config, services) => {
  const productsRouter = Router()

  productsRouter.get('/', async (req, res) => {
    const { productsService } = services
    try {
      const page = Number(req.query.page || 1)
      const results = await productsService.retrieveProductsPage(page)
      res.json(results)
    } catch (e) {
      res.status(500).send(e.message)
    }
  })

  productsRouter.get('/:productid', async (req, res) => {
    const { productsService } = services
    const id = req.params.productid
    try {
      const product = await productsService.retrieveProduct(id)
      const relatedProducts = await productsService.getRelatedProducts(product)
      res.json({
        ...product,
        relatedProducts
      })
    } catch (e) {
      res.status(500).send(e.message)
    }
  })

  return productsRouter
}
