import React from 'react'
import PropTypes from 'prop-types'

const ProductDescription = ({ product }) => (
  <div className="product-description">
    { product.description.split('\n').map((chunk, i) => (
      <p key={i} className="basic-text">
        { chunk }
      </p>
    )) }
  </div>

)

ProductDescription.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductDescription
