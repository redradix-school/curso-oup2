import React from 'react'
import { storiesOf } from '@storybook/react'
import AppLayout from './AppLayout'

storiesOf('Layouts', module)
  .add('AppLayout', () => (
    <AppLayout>
      <h1>Content</h1>
    </AppLayout>
  ))
