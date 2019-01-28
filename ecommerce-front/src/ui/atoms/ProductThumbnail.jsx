import React from 'react'
import PropTypes from 'prop-types'

const ProductThumbnail = ({ product }) => (
  <div className="product-thumbnail">
    <img src={ product.img }/>
  </div>
)

ProductThumbnail.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductThumbnail
