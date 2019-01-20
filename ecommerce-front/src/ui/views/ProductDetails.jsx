import React, { Fragment } from 'react'

const ProductDetails = () => (
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

        <div className="product-details">
          <h1 className="product-title">Product Title</h1>
          <span className="product-price">$119.99</span>
          <div className="product-picture">
            <img src="https://colorlib.com/preview/theme/sublime/images/details_1.jpg"/>
          </div>
          <p className="product-availability">Availability: <span className="status success">In stock</span></p>
          <p className="product-description basic-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris consequat nisi ut mauris efficitur lacinia.
          </p>

          <div className="product-actions">
            <div className="select-box">
              <select>
                <option>Quantity</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <button className="button"><span>Add to Cart</span></button>
          </div>
        </div>

        <div className="related-products">
          <h1 className="beta centered">Related Products</h1>

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

          </div>

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

export default ProductDetails
