import React from 'react'
import AppLayout from '../layouts/AppLayout'
import ShoppingCartItems from '../organisms/ShoppingCartItems'

const ShoppingCart = () => (
  <AppLayout>

    <div className="shopping-cart-items">

      <div className="intro-title">
        <h1 className="beta">Shopping Cart</h1>
        <p className="subtitle">Selected products</p>
      </div>

      <ShoppingCartItems />

    </div>

    <div className="cart-total">

      <div className="grey-card">
        <div className="intro-title">
          <h1 className="beta">Cart total</h1>
          <p className="subtitle">Final info</p>
        </div>

        <div className="row">
          <span className="label">Subtotal</span>
          <span className="value">$119.99</span>
        </div>

        <div className="row">
          <span className="label">Shipping</span>
          <span className="value">Free</span>
        </div>

        <div className="row">
          <span className="label">Total</span>
          <span className="value">$119.99</span>
        </div>
      </div>

      <button className="button full-width">
        <span>Proceed to checkout</span>
      </button>

    </div>

  </AppLayout>
)

export default ShoppingCart
