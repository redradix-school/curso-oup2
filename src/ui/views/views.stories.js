import React from 'react'
import { storiesOf } from '@storybook/react'
// components
import ProductList from './ProductList'
import ProductDetails from './ProductDetails'
import ShoppingCart from './ShoppingCart'
import Checkout from './Checkout'

storiesOf('Views')

  .add('ProductList', () => (
    <ProductList/>
  ))
  .add('ProductDetails', () => (
    <ProductDetails/>
  ))
  .add('ShoppingCart', () => (
    <ShoppingCart/>
  ))
  .add('Checkout', () => (
    <Checkout/>
  ))
