import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import AppLayout from './AppLayout'

storiesOf('Layouts', module)
  .addDecorator(withKnobs)

  .add('AppLayout', () => {
    const cartData = { items: [2, 3] }
    return (
      <AppLayout shoppingCart={cartData}>
        <h1>{ text('content', 'Test Content') }</h1>
      </AppLayout>
    )
  })
