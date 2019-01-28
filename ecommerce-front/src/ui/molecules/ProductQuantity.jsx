import React from 'react'
import PropTypes from 'prop-types'
import { identity } from 'lodash'

const ProductQuantity = ({ quantity, onChange }) => (
  <div className="product-quantity">
    <div className="select-box">
      <select value={quantity}
              onChange={
                e => onChange(Number(e.target.value))
              }>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
    </div>
  </div>
)

ProductQuantity.propTypes = {
  quantity: PropTypes.number,
  onChange: PropTypes.func,
}

ProductQuantity.defaultProps = {
  quantity: 1,
  onChange: identity
}

export default ProductQuantity
