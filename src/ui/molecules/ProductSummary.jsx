import React from 'react'
import ProductTitle from '../atoms/ProductTitle'
import ProductPrice from '../atoms/ProductPrice'
import ProductThumbnail from '../atoms/ProductThumbnail'

const ProductSummary = () => (
  <div className="product-summary">
    <ProductThumbnail />
    <ProductTitle />
    <ProductPrice />
  </div>
)

export default ProductSummary
