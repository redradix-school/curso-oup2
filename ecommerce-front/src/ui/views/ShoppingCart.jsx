import React, { Fragment } from 'react'

const ShoppingCart = () => (
  <Fragment>
    <div className="header">
      <div className="wrapper">
        <div className="logo">logo</div>
        <ul className="actions">
          <li>Shop</li>
          <li>Cart (0)</li>
        </ul>
      </div>
    </div>

    <div className="main-content wrapper">
      <div className="">

        <div className="shopping-cart-items">

          <div className="intro-title">
            <h1 className="beta">Shopping Cart</h1>
            <p className="subtitle">Selected products</p>
          </div>

          <div className="items-header">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
          </div>

          <div className="shopping-cart-item">
            <div className="product-thumbnail">
              <img src="https://colorlib.com/preview/theme/sublime/images/product_2.jpg"/>
            </div>
            <div className="product-info">
              <h3 className="product-title">Product title</h3>
              <p className="subtitle">subtitle</p>
            </div>
            <span className="product-price">$119.99</span>
            <div className="product-quantity">
              <div className="select-box">
                <select><option>1</option></select>
              </div>
            </div>
            <span className="product-total">$119.99</span>
            <div className="product-actions">
              <button className="action-remove"><span>X</span></button>
            </div>
          </div>

          <div className="shopping-cart-item">
            <div className="product-thumbnail">
              <img src="https://colorlib.com/preview/theme/sublime/images/product_2.jpg"/>
            </div>
            <div className="product-info">
              <h3 className="product-title">Product title</h3>
              <p className="subtitle">subtitle</p>
            </div>
            <span className="product-price">$119.99</span>
            <div className="product-quantity">
              <div className="select-box">
                <select><option>1</option></select>
              </div>
            </div>
            <span className="product-total">$119.99</span>
            <div className="product-actions">
              <button className="action-remove"><span>X</span></button>
            </div>
          </div>

          <div className="shopping-cart-item">
            <div className="product-thumbnail">
              <img src="https://colorlib.com/preview/theme/sublime/images/product_2.jpg"/>
            </div>
            <div className="product-info">
              <div className="intro-title">
                <h1 className="beta">Product title</h1>
                <p className="subtitle">Subtitle</p>
              </div>
            </div>
            <span className="product-price">$119.99</span>
            <div className="product-quantity">
              <div className="select-box">
                <select><option>1</option></select>
              </div>
            </div>
            <span className="product-total">$119.99</span>
            <div className="product-actions">
              <button className="action-remove"><span>X</span></button>
            </div>
          </div>

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

      </div>
    </div>

    <div className="footer">
      <div className="wrapper">
        <div className="logo">logo</div>
        <p className="copy">Copyright © 2019</p>
      </div>
    </div>

  </Fragment>
)

export default ShoppingCart
