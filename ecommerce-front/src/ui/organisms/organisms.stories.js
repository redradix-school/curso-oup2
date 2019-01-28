import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { identity } from 'lodash'
// components
import AppFooter from '../organisms/AppFooter'
import AppHeader from '../organisms/AppHeader'
import ProductGrid from '../organisms/ProductGrid'
import ProductInfo from '../organisms/ProductInfo'
import RelatedProducts from '../organisms/RelatedProducts'
import ShoppingCartItems from '../organisms/ShoppingCartItems'
import AddressForm from '../organisms/AddressForm'
import DeliveryMethodSelector from '../organisms/DeliveryMethodSelector'
import OrderSummary from '../organisms/OrderSummary'
// data
import productListData from '../../../.storybook/data/product-list.json'
import productDetailsData from '../../../.storybook/data/product-details.json'
import shoppingCartData from '../../../.storybook/data/shopping-cart.json'

storiesOf('Organisms', module)
  .addDecorator(withKnobs)

  .add('AppFooter', () => (
    <AppFooter />
  ))

  .add('AppHeader', () => {
    const cartData = { items: [1, 2] }
    return (<AppHeader shoppingCart={cartData} />)
  })

  .add('OrderSummary', () => (
    <OrderSummary
      shoppingCart={shoppingCartData}
      title={text('title', 'Order summary')}
      subtitle={text('subtitle', 'Review your purchase')}
    />
  ))


storiesOf('Organisms/ProductList', module)

  .add('ProductGrid', () => (
    <ProductGrid products={productListData.results}/>
  ))

storiesOf('Organisms/ProductDetails', module)

  .add('ProductInfo', () => (
    <ProductInfo
      product={productDetailsData}
      quantity={1}
      setQuantity={action('setQuantity')}
      onAddToCart={action('addToCart')}
    />
  ))

  .add('RelatedProducts', () => (
    <RelatedProducts products={productDetailsData.relatedProducts} />
  ))

storiesOf('Organisms/ShoppingCart', module)

  .add('ShoppingCartItems', () => (
    <div className="shopping-cart-items">
      <ShoppingCartItems items={shoppingCartData.items}
                         onModifyItemQuantity={action('onModifyItemQuantity')}
                         onRemoveItem={action('onRemoveItem')}/>
    </div>
  ))

storiesOf('Organisms/Checkout', module)

  .add('AddressForm', () => (
    <AddressForm errors={{}} values={{}}
                 onFieldChange={action('onFieldChange')}/>
  ))

  .add('DeliveryMethodSelector', () => (
    <DeliveryMethodSelector
      deliveryMethod='standard'
      onDeliveryMethodChange={action('deliveryMethodChange')} />
  ))
