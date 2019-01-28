import React from 'react'
import PropTypes from 'prop-types'
import ProductTitle from '../atoms/ProductTitle'
import Subtitle from '../atoms/Subtitle'

const ProductInfo = ({ product }) => (
  <div className="product-info">
    <ProductTitle product={product} />
    <Subtitle>{ product.category }</Subtitle>
  </div>
)

ProductInfo.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductInfo
