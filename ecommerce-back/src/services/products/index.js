module.exports = (infra, repos, services) => ({

  async retrieveProduct(productId) {
    const { productsRepository } = repos
    try {
      return await productsRepository.find(productId)
    } catch (e) {
      services.errorsService.report(e)
      throw e
    }
  },

  async retrieveProductsPage(page) {
    const { productsRepository } = repos
    try {
      return await productsRepository.listPage(page)
    } catch (e) {
      services.errorsService.report(e)
      throw e
    }
  },

  async getRelatedProducts(product) {
    const { productsRepository } = repos
    try {
      return await productsRepository.randomSample(4)
    } catch (e) {
      services.errorsService.report(e)
      throw e
    }
  },

  async reserveInventory(product, quantity) {
    void 0
  },

  async freeInventory(product, quantity) {
    void 0
  }

})
