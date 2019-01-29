import { identity } from 'lodash'
import makeDeferred from '../lib/make-deferred'
import productService from '../../src/services/products-service'

describe('Products Service', () => {
  describe('Queries', () => {
    test('getProducts', () => {
      const catalog = { test: true }
      const service = productService({}, { catalog }, identity)
      expect(service.getProducts()).toBe(catalog)
    })
    test('getProduct', () => {
      const details = { test: true }
      const service = productService({}, { details }, identity)
      expect(service.getProduct()).toBe(details)
    })
  })

  describe('Commands', () => {
    let state = {}
    const setState = (newState) => { state = newState }
    let promise, xhr, service
    const testPayload = { test: true }

    beforeEach(() => {
      setState({})
      promise = makeDeferred()
      xhr = { get: jest.fn(() => promise) }
      service = productService({ xhr }, state, setState)
    })

    test('fetchProducts', async () => {
      const done = service.fetchProducts(1)
      expect(state).toEqual({ loading: true })
      expect(xhr.get).toHaveBeenCalledWith('/products', { params: { page: 1 } })
      promise.resolve(testPayload)
      await done
      expect(state).toEqual({ catalog: testPayload, loading: false })
    })

    test('fetchProducts', async () => {
      const done = service.fetchProduct('id')
      expect(state).toEqual({ loading: true })
      expect(xhr.get).toHaveBeenCalledWith('/products/id')
      promise.resolve(testPayload)
      await done
      expect(state).toEqual({ details: testPayload, loading: false })
    })

    test('failed request', async () => {
      service = productService({ xhr }, undefined, setState)
      const done = service.fetchProduct('id')
      expect(state.loading).toEqual(true)
      expect(xhr.get).toHaveBeenCalledWith('/products/id')
      promise.reject(testPayload)
      await done
      expect(state.error).toEqual(testPayload)
      expect(state.loading).toEqual(false)
    })

  })
})
