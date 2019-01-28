import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AppLayout from '../layouts/AppLayout'
import ProductInfo from '../organisms/ProductInfo'
import RelatedProducts from '../organisms/RelatedProducts'

const ProductDetails = ({ data, shoppingCart, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1)
  return (
    <AppLayout shoppingCart={shoppingCart}>
      <ProductInfo product={data}
                   quantity={quantity}
                   setQuantity={setQuantity}
                   onAddToCart={
                     () => onAddToCart(data.id, quantity)
                   }/>
      <RelatedProducts products={data.relatedProducts} />
    </AppLayout>
  )
}

ProductDetails.propTypes = {
  data: PropTypes.object.isRequired,
  shoppingCart: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired
}

export default ProductDetails
