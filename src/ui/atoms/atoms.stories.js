import React from 'react'
import { storiesOf } from '@storybook/react'
// components
import ProductAvailability from '../atoms/ProductAvailability.jsx'
import ProductDescription from '../atoms/ProductDescription'
import ProductInfo from '../atoms/ProductInfo'
import ProductPicture from '../atoms/ProductPicture'
import ProductPrice from '../atoms/ProductPrice'
import ProductThumbnail from '../atoms/ProductThumbnail'
import ProductTitle from '../atoms/ProductTitle'
import ProductTotal from '../atoms/ProductTotal'
import VerticalSeparator from '../atoms/VerticalSeparator'

storiesOf('Atoms')

  .add('ProductAvailability', () => (
    <ProductAvailability/>
  ))

  .add('ProductDescription', () => (
    <ProductDescription/>
  ))

  .add('ProductInfo', () => (
    <ProductInfo/>
  ))

  .add('ProductPicture', () => (
    <ProductPicture/>
  ))

  .add('ProductPrice', () => (
    <ProductPrice/>
  ))

  .add('ProductThumbnail', () => (
    <ProductThumbnail/>
  ))

  .add('ProductTitle', () => (
    <ProductTitle/>
  ))

  .add('ProductTotal', () => (
    <ProductTotal/>
  ))

  .add('VerticalSeparator', () => (
    <VerticalSeparator/>
  ))
