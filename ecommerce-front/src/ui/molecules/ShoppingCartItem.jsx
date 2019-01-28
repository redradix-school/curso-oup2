import React from 'react'
import PropTypes from 'prop-types'
import ProductInfo from '../atoms/ProductInfo'
import ProductPrice from '../atoms/ProductPrice'
import ProductTotal from '../atoms/ProductTotal'
import ProductThumbnail from '../atoms/ProductThumbnail'
import ProductQuantity from '../molecules/ProductQuantity'
import Button from '../atoms/Button'

const ShoppingCartItem = ({ item, onModifyQuantity, onRemove }) => (
  <div className="shopping-cart-item">
    <ProductThumbnail product={item} />
    <ProductInfo product={item} />
    <ProductPrice product={item} />
    <ProductQuantity quantity={item.quantity}
                     onChange={onModifyQuantity}/>
    <ProductTotal product={item} />

    <div className="product-actions">
      <Button className="action-remove"
              action={onRemove}>x</Button>
    </div>
  </div>
)

ShoppingCartItem.propTypes = {
  item: PropTypes.object.isRequired,
  onModifyQuantity: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default ShoppingCartItem
