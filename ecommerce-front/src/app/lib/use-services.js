import { useState } from 'react'
import productsService from '../../services/products-service'
import shoppingCartService from '../../services/shopping-cart-service'

export default (infra) => ({
  productsService: productsService(infra, ...useState()),
  shoppingCartService: shoppingCartService(infra, ...useState())
})
