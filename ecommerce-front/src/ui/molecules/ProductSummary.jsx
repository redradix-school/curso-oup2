import React from 'react'
import PropTypes from 'prop-types'
import ProductTitle from '../atoms/ProductTitle'
import ProductPrice from '../atoms/ProductPrice'
import ProductThumbnail from '../atoms/ProductThumbnail'

const ProductSummary = ({ product }) => (
  <div className="product-summary">
    <ProductThumbnail product={product} />
    <ProductTitle product={product} />
    <ProductPrice product={product} />
  </div>
)

ProductSummary.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductSummary
