import React, { Fragment } from 'react'
import ShoppingCartItem from '../molecules/ShoppingCartItem'

const ShoppingCartItems = () => (
  <Fragment>

    <div className="items-header">
      <span>Product</span>
      <span>Price</span>
      <span>Quantity</span>
      <span>Total</span>
    </div>

    <ShoppingCartItem/>
    <ShoppingCartItem/>
    <ShoppingCartItem/>

  </Fragment>

)

export default ShoppingCartItems
