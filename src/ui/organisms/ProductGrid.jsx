import React from 'react'
import Grid from '../molecules/Grid'
import GridItem from '../molecules/GridItem'
import ProductSummary from '../molecules/ProductSummary'

const ProductGrid = () => (
  <Grid>
    <GridItem><ProductSummary/></GridItem>
    <GridItem><ProductSummary/></GridItem>
    <GridItem><ProductSummary/></GridItem>
    <GridItem><ProductSummary/></GridItem>
  </Grid>
)

export default ProductGrid
