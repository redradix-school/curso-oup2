import React from 'react'
import AppLayout from '../layouts/AppLayout'
import ProductGrid from '../organisms/ProductGrid'
import Pagination from '../molecules/Pagination'

const ProductList = () => (
  <AppLayout>

    <div className="intro-title">
      <h1 className="beta">Products</h1>
      <p className="subtitle">Full catalog</p>
    </div>

    <ProductGrid/>
    <Pagination/>
  </AppLayout>
)

export default ProductList
