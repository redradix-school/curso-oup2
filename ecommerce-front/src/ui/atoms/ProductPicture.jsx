import React from 'react'
import PropTypes from 'prop-types'

const ProductPicture = ({ product }) => (
  <div className="product-picture">
    <img src={ product.img } alt={ product.title }/>
  </div>
)

ProductPicture.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductPicture
