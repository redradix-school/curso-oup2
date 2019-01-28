import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { identity } from 'lodash'
import ProductTitle from '../atoms/ProductTitle'
import ProductPrice from '../atoms/ProductPrice'
import ProductPicture from '../atoms/ProductPicture'
import ProductAvailability from '../atoms/ProductAvailability'
import ProductDescription from '../atoms/ProductDescription'
import ProductQuantity from '../molecules/ProductQuantity'
import Button from '../atoms/Button'

const ProductInfo = ({ product, quantity, setQuantity, onAddToCart }) => (
  <div className="product-details">

    <ProductTitle product={product} />
    <ProductPrice product={product} />
    <ProductPicture product={product} />
    <ProductAvailability product={product} />
    <ProductDescription product={product} />

    <div className="product-actions">
      <ProductQuantity quantity={quantity}
                       onChange={setQuantity}/>
      <Button action={onAddToCart}>
        <FormattedMessage id="button:add-to-cart"/>
      </Button>
    </div>
  </div>
)

ProductInfo.propTypes = {
  product: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
  setQuantity: PropTypes.func,
  onAddToCart: PropTypes.func
}

ProductInfo.defaultProps = {
  setQuantity: identity,
  onAddToCart: identity
}

export default ProductInfo
