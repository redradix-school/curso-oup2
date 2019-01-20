import React, { Fragment } from 'react'

const ProductList = () => (
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

        <div className="intro-title">
          <h1 className="beta">Products</h1>
          <p className="subtitle">Full catalog</p>
        </div>

        <div className="grid-container">

          <div className="grid-item">
            <div className="product-summary">
              <div className="product-thumbnail">
                <img src="https://colorlib.com/preview/theme/sublime/images/product_2.jpg"/>
              </div>
              <span className="product-title">Awesome Product</span>
              <span className="product-price">$119.99</span>
            </div>
          </div>

          <div className="grid-item">
            <div className="product-summary">
              <div className="product-thumbnail">
                <img src="https://colorlib.com/preview/theme/sublime/images/product_2.jpg"/>
              </div>
              <span className="product-title">Awesome Product</span>
              <span className="product-price">$119.99</span>
            </div>
          </div>

          <div className="grid-item">
            <div className="product-summary">
              <div className="product-thumbnail">
                <img src="https://colorlib.com/preview/theme/sublime/images/product_2.jpg"/>
              </div>
              <span className="product-title">Awesome Product</span>
              <span className="product-price">$119.99</span>
            </div>
          </div>

          <div className="grid-item">
            <div className="product-summary">
              <div className="product-thumbnail">
                <img src="https://colorlib.com/preview/theme/sublime/images/product_2.jpg"/>
              </div>
              <span className="product-title">Awesome Product</span>
              <span className="product-price">$119.99</span>
            </div>
          </div>

          <div className="grid-item">
            <div className="product-summary">
              <div className="product-thumbnail">
                <img src="https://colorlib.com/preview/theme/sublime/images/product_2.jpg"/>
              </div>
              <span className="product-title">Awesome Product</span>
              <span className="product-price">$119.99</span>
            </div>
          </div>

          <div className="grid-item">
            <div className="product-summary">
              <div className="product-thumbnail">
                <img src="https://colorlib.com/preview/theme/sublime/images/product_2.jpg"/>
              </div>
              <span className="product-title">Awesome Product</span>
              <span className="product-price">$119.99</span>
            </div>
          </div>

          <div className="grid-item">
            <div className="product-summary">
              <div className="product-thumbnail">
                <img src="https://colorlib.com/preview/theme/sublime/images/product_2.jpg"/>
              </div>
              <span className="product-title">Awesome Product</span>
              <span className="product-price">$119.99</span>
            </div>
          </div>

          <div className="grid-item">
            <div className="product-summary">
              <div className="product-thumbnail">
                <img src="https://colorlib.com/preview/theme/sublime/images/product_2.jpg"/>
              </div>
              <span className="product-title">Awesome Product</span>
              <span className="product-price">$119.99</span>
            </div>
          </div>

        </div>

        <ul className="pagination-container">
          <li className="pagination-item active">01</li>
          <li className="pagination-item">02</li>
          <li className="pagination-item">03</li>
        </ul>

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

export default ProductList
