import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// components
import ProductList from './ProductList'
import ProductDetails from './ProductDetails'
import ShoppingCart from './ShoppingCart'
import Checkout from './Checkout'
// data
import productListData from '../../../.storybook/data/product-list.json'
import productDetailsData from '../../../.storybook/data/product-details.json'
import shoppingCartData from '../../../.storybook/data/shopping-cart.json'

storiesOf('Views', module)

  .add('ProductList', () => (
    <ProductList data={productListData}
                 shoppingCart={shoppingCartData} />
  ))

  .add('ProductDetails', () => (
    <ProductDetails data={productDetailsData}
                    shoppingCart={shoppingCartData}
                    onAddToCart={action('onAddToCart')}/>
  ))

  .add('ShoppingCart', () => (
    <ShoppingCart shoppingCart={shoppingCartData}
                  onModifyItemQuantity={action('onModifyItemQuantity')}
                  onRemoveItem={action('onRemoveItem')} />
  ))

  .add('Checkout', () => (
    <Checkout shoppingCart={shoppingCartData}
              onCheckout={action('onCheckout')}/>
  ))
