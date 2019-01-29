import { reject } from 'lodash'
import update from './lib/update'
import updateWithLoading from './lib/update-with-loading'

const initState = { id: null, items: [] }

export default ({ xhr }, state = initState, setState) => {
  const service = {
    // queries
    getShoppingCart: () => state,

    // commands
    async fetchShoppingCart() {
      if (!state.id) return service.createShoppingCart()
      await updateWithLoading(state, setState, async () => (
        xhr.get(`/cart/${state.id}`)
      ))
    },
    async createShoppingCart() {
      await updateWithLoading(state, setState, async () => (
        xhr.post('/cart')
      ))
    },
    async addProduct(id, quantity) {
      await updateWithLoading(state, setState, async () => (
        xhr.post(`/cart/${state.id}/items`, { id, quantity })
      ))
    },
    async removeItem(id) {
      // optimistically update the state before the request
      update(state, setState, 'items', items => reject(items, { id }))
      await updateWithLoading(state, setState, async () => (
        xhr.delete(`/cart/${state.id}/items/${id}`)
      ))
    },
    async modifyItemQuantity(id, quantity) {
      // optimistically update the state before the request
      update(state, setState, 'items', items => items.map(
        item => item.id === id ? { ...item, quantity } : item
      ))
      await updateWithLoading(state, setState, async () => (
        xhr.put(`/cart/${state.id}/items/${id}`, { quantity })
      ))
    },
    async checkout(data) {
      await updateWithLoading(state, setState, async () => (
        xhr.post(`/cart/${state.id}/checkout`, data)
      ))
    }
  }
  return service
}
