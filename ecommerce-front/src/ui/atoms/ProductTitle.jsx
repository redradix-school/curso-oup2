import React from 'react'
import PropTypes from 'prop-types'

const ProductTitle = ({ product }) => (
  <h1 className="product-title">{ product.title }</h1>
)

ProductTitle.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductTitle
