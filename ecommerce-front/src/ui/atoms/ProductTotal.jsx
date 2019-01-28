import React from 'react'
import PropTypes from 'prop-types'
import Money from '../atoms/Money'

const ProductTotal = ({ product }) => (
  <Money total price={product.price}
         quantity={product.quantity}/>
)

ProductTotal.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductTotal
