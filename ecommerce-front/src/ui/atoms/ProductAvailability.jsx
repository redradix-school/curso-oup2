import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

const ProductAvailability = ({ product }) => {
  const { available } = product
  return (
    <p className="product-availability">
      <FormattedMessage id="text:availability"/>:
    { available
      ? (<span className="status success">
           <FormattedMessage id="value:in-stock"/>
         </span>)
      : (<span className="status error">
           <FormattedMessage id="value:not-available"/>
         </span>) }
    </p>
  )
}

ProductAvailability.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductAvailability
