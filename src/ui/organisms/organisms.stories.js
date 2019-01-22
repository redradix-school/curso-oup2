import React from 'react'
import { storiesOf } from '@storybook/react'
// components
import AppFooter from '../organisms/AppFooter'
import AppHeader from '../organisms/AppHeader'
import ProductGrid from '../organisms/ProductGrid'
import ProductInfo from '../organisms/ProductInfo'
import RelatedProducts from '../organisms/RelatedProducts'
import ShoppingCartItems from '../organisms/ShoppingCartItems'

storiesOf('Organisms')

  .add('AppFooter', () => (
    <AppFooter />
  ))

  .add('AppHeader', () => (
    <AppHeader />
  ))

  .add('ProductGrid', () => (
    <ProductGrid />
  ))

  .add('ProductInfo', () => (
    <ProductInfo />
  ))

  .add('RelatedProducts', () => (
    <RelatedProducts />
  ))

  .add('ShoppingCartItems', () => (
    <div className="shopping-cart-items">
      <ShoppingCartItems />
    </div>
  ))
