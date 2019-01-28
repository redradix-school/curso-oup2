import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
// components
import Grid from './Grid'
import GridItem from '../atoms/GridItem'
import Pagination from '../molecules/Pagination'
import ProductQuantity from '../molecules/ProductQuantity'
import ProductSummary from '../molecules/ProductSummary'
import ShoppingCartItem from '../molecules/ShoppingCartItem'
import Card from '../molecules/Card'
import IntroTitle from '../molecules/IntroTitle'
import RadioGroup from '../molecules/RadioGroup'
import Radio from '../atoms/Radio'
import FormGroup from '../molecules/FormGroup'
import FormField from '../atoms/FormField'
// data
import product from '../../../.storybook/data/product.json'
import cartItem from '../../../.storybook/data/cart-item.json'

// stories

storiesOf('Molecules', module)
  .addDecorator(withKnobs)

  .add('Pagination', () => (
    <Pagination pages={number('pages', 5)}
                currentPage={number('currentPage', 2)} />
  ))

  .add('ProductQuantity', () => (
    <ProductQuantity
      quantity={number('quantity', 1)}
      onChange={action('onChange')}/>
  ))

  .add('ProductSummary', () => {
    return (
      <div style={{ width: '300px' }}>
        <ProductSummary product={product}/>
      </div>
    )
  })

  .add('ShoppingCartItem', () => (
    <div className="shopping-cart-items">
      <ShoppingCartItem item={cartItem}
                        onModifyQuantity={action('onModifyQuantity')}
                        onRemove={action('onRemove')}/>
    </div>
  ))

  .add('Grid', () => (
    <Grid>
      <GridItem>1</GridItem>
      <GridItem>2</GridItem>
      <GridItem>3</GridItem>
      <GridItem>4</GridItem>
      <GridItem>5</GridItem>
      <GridItem>6</GridItem>
      <GridItem>7</GridItem>
      <GridItem>8</GridItem>
    </Grid>
  ))

  .add('IntroTitle', () => (
    <IntroTitle
      title={ text('title', 'Big Title') }
      subtitle={ text('subtitle', 'subtitle') }
    />
  ))

  .add('Radio Group', () => (
    <RadioGroup>
      <Radio name="test" label="Field 1" value="1"/ >
      <Radio name="test" label="Field 2" value="2"/ >
      <Radio name="test" label="Field 3" value="3"/ >
    </RadioGroup>
  ))

  .add('Card', () => (
    <div style={{ width: '300px' }}>
      <Card transparent={boolean('transparent', false)}>
        <span>Test</span>
      </Card>
    </div>
  ))

  .add('FormGroup', () => (
    <FormGroup>
      <FormField label='Field 1' name='test'/>
      <FormField label='Field 2' name='test2'/>
      <FormField label='Field 3' name='test3' half
                 error="Validation error"/>
      <FormField label='Field 4' name='test4' half/>
    </FormGroup>
  ))
