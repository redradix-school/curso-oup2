import React from 'react'
import ProductTitle from '../atoms/ProductTitle'
import ProductPrice from '../atoms/ProductPrice'
import ProductPicture from '../atoms/ProductPicture'
import ProductAvailability from '../atoms/ProductAvailability'
import ProductDescription from '../atoms/ProductDescription'
import ProductQuantity from '../molecules/ProductQuantity'

const ProductInfo = () => (
  <div className="product-details">

    <ProductTitle />
    <ProductPrice />
    <ProductPicture />
    <ProductAvailability />
    <ProductDescription />

    <div className="product-actions">

      <ProductQuantity />

      <button className="button">
        <span>Add to Cart</span>
      </button>

    </div>
  </div>
)

export default ProductInfo
