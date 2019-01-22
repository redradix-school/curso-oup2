import React from 'react'
import AppLayout from '../layouts/AppLayout'
import ProductInfo from '../organisms/ProductInfo'
import RelatedProducts from '../organisms/RelatedProducts'

const ProductDetails = () => (
  <AppLayout>
    <ProductInfo/>
    <RelatedProducts/>
  </AppLayout>
)

export default ProductDetails
