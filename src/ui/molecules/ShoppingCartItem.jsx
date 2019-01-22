import React from 'react'
import ProductInfo from '../atoms/ProductInfo'
import ProductTitle from '../atoms/ProductTitle'
import ProductPrice from '../atoms/ProductPrice'
import ProductTotal from '../atoms/ProductTotal'
import ProductThumbnail from '../atoms/ProductThumbnail'
import ProductQuantity from '../molecules/ProductQuantity'

const ShoppingCartItem = () => (
  <div className="shopping-cart-item">
    <ProductThumbnail />
    <ProductInfo />
    <ProductPrice />
    <ProductQuantity />
    <ProductTotal />

    <div className="product-actions">
      <button className="action-remove"><span>X</span></button>
    </div>
  </div>
)

export default ShoppingCartItem
