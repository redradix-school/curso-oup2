import updateWithLoading from './lib/update-with-loading'

const initState = {
  catalog: { results: [], page: 0, totalPages: 0 },
  details: { description: '', relatedProducts: [] }
}

export default ({ xhr }, state = initState, setState) => ({
  // queries
  getProducts: () => state.catalog,
  getProduct: () => state.details,

  // commands
  async fetchProducts(page) {
    await updateWithLoading(state, setState, async () => ({
      catalog: await xhr.get('/products', { params: { page } })
    }))
  },
  async fetchProduct(productId) {
    await updateWithLoading(state, setState, async () => ({
      details: await xhr.get(`/products/${productId}`)
    }))
  }
})
