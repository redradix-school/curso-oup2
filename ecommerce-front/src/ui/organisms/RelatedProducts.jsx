import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import ProductGrid from '../organisms/ProductGrid'
import BetaHeader from '../atoms/BetaHeader'

const RelatedProducts = ({ products }) => (
  <div className="related-products">
    <BetaHeader>
      <FormattedMessage id="title:related-products"/>
    </BetaHeader>
    <ProductGrid products={products} />
  </div>
)

RelatedProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default RelatedProducts
