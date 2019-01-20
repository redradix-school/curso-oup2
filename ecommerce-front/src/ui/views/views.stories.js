import React from 'react'
import { storiesOf } from '@storybook/react'
import ProductList from './ProductList'

storiesOf('Views', module)
  .add('ProductList', () => (
    <ProductList/>
  ))
