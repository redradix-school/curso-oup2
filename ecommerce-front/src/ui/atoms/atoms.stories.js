import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, number, string, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
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
import Subtitle from '../atoms/Subtitle'
import BetaHeader from '../atoms/BetaHeader'
import Card from '../molecules/Card'
import CardRow from '../atoms/CardRow'
import FormGroup from '../molecules/FormGroup'
import FormField from '../atoms/FormField'
import Button from '../atoms/Button'
import PaginationItem from '../atoms/PaginationItem'
import Money from '../atoms/Money'
// data
import product from '../../../.storybook/data/product.json'
import productDetails from '../../../.storybook/data/product-details.json'
import cartItem from '../../../.storybook/data/cart-item.json'

storiesOf('Atoms', module)
  .addDecorator(withKnobs)

  .add('ProductAvailability', () => (
    <ProductAvailability product={{
      available: boolean('available', true)
    }}/>
  ))

  .add('ProductDescription', () => (
    <ProductDescription product={productDetails} />
  ))

  .add('ProductInfo', () => (
    <ProductInfo product={cartItem} />
  ))

  .add('ProductPicture', () => (
    <ProductPicture product={product} />
  ))

  .add('ProductPrice', () => (
    <ProductPrice product={product} />
  ))

  .add('ProductThumbnail', () => (
    <ProductThumbnail product={product} />
  ))

  .add('ProductTitle', () => (
    <ProductTitle product={product} />
  ))

  .add('ProductTotal', () => (
    <ProductTotal product={cartItem} />
  ))

  .add('VerticalSeparator', () => (
    <VerticalSeparator/>
  ))

  .add('Subtitle', () => (
    <Subtitle>{ text('subtitle', 'subtitle')}</Subtitle>
  ))

  .add('BetaHeader', () => (
    <BetaHeader>
      { text('header', 'title') }
    </BetaHeader>
  ))

  .add('CardRow', () => (
    <Card>
      <CardRow
        label={ text('label', 'label') }
        bold={ boolean('bold', false) }
      >
        { text('value', '$100') }
      </CardRow>
    </Card>
  ))

  .add('FormField', () => (
    <FormGroup>
      <FormField
        label={ text('label', 'Label') }
        value={ text('value', '') }
        half={ boolean('half', false) }
        error={ text('error', '') }
        name="test"
      />
    </FormGroup>
  ))

  .add('Button', () => (
    <div>
      <Button fullwidth={boolean('fullwidth', false)}
              className={text('className', '')}
              action={action('action')}>
        { text('label', 'Button Label') }
      </Button>
    </div>
  ))

  .add('PaginationItem', () => (
    <ul className="pagination-container">
      <PaginationItem page={2}
                      active={boolean('active', false)}/>
    </ul>
  ))

  .add('Money', () => (
    <Money
      quantity={number('quantity', 1)}
      price={{
        amount: number('price', 1000),
        currency: 'USD'
      }} />
  ))
