import React from 'react'
import { storiesOf } from '@storybook/react'
// components
// import Grid from './Grid'
// import GridItem from './GridItem'
import Pagination from '../molecules/Pagination'
import ProductQuantity from '../molecules/ProductQuantity'
import ProductSummary from '../molecules/ProductSummary'
import ShoppingCartItem from '../molecules/ShoppingCartItem'

storiesOf('Molecules')

  .add('Pagination', () => (
    <Pagination/>
  ))

  .add('ProductQuantity', () => (
    <ProductQuantity/>
  ))

  .add('ProductSummary', () => (
    <div style={{ width: '300px' }}>
      <ProductSummary/>
    </div>
  ))

  .add('ShoppingCartItem', () => (
    <div className="shopping-cart-items">
      <ShoppingCartItem/>
    </div>
  ))

  // .add('Grid', () => (
  //   <Grid>
  //     <GridItem>1</GridItem>
  //     <GridItem>2</GridItem>
  //     <GridItem>3</GridItem>
  //     <GridItem>4</GridItem>
  //     <GridItem>5</GridItem>
  //     <GridItem>6</GridItem>
  //     <GridItem>7</GridItem>
  //     <GridItem>8</GridItem>
  //   </Grid>
  // ))
