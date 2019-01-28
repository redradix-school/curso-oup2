import React from 'react'
import PropTypes from 'prop-types'

const ProductPicture = ({ product }) => (
  <div className="product-picture">
    <img src={ product.img }/>
  </div>
)

ProductPicture.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductPicture
