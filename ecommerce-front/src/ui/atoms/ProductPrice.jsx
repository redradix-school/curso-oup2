import React from 'react'
import PropTypes from 'prop-types'
import Money from '../atoms/Money'

const ProductPrice = ({ product }) => (
  <Money price={product.price} />
)

ProductPrice.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductPrice
