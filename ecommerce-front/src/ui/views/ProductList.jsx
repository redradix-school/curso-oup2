import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'
import AppLayout from '../layouts/AppLayout'
import ProductGrid from '../organisms/ProductGrid'
import Pagination from '../molecules/Pagination'
import IntroTitle from '../molecules/IntroTitle'

const ProductList = ({ data, shoppingCart, intl }) => {
  const { results, totalPages, page } = data
  const productsTitle = intl.formatMessage({
    id: 'title:products'
  })
  const productsSubitle = intl.formatMessage({
    id: 'title:full-catalog'
  })
  return (
    <AppLayout shoppingCart={shoppingCart}>
      <IntroTitle title={productsTitle}
                  subtitle={productsSubitle}/>
      <ProductGrid products={results} />
      <Pagination pages={totalPages} currentPage={page}/>
    </AppLayout>
  )
}

ProductList.propTypes = {
  data: PropTypes.object.isRequired,
  shoppingCart: PropTypes.object.isRequired
}

export default injectIntl(ProductList)
