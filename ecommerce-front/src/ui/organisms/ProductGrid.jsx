import React from 'react'
import PropTypes from 'prop-types'
import Grid from '../molecules/Grid'
import GridItem from '../atoms/GridItem'
import ProductSummary from '../molecules/ProductSummary'

const ProductGrid = ({ products }) => (
  <Grid>
    { products.map((product) => (
      <GridItem key={product.id}>
        <ProductSummary product={product} />
      </GridItem>
    )) }
  </Grid>
)

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ProductGrid
