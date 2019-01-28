import React from 'react'
import { configure, addDecorator  } from '@storybook/react'
import { IntlProvider } from 'react-intl'
import setupI18n from '../src/lib/setup-i18n'

import '../src/styles.css'

// i18n

const locale = 'es-ES'

addDecorator(story => (
  <IntlProvider messages={setupI18n(locale)} locale={locale}>
    {story()}
  </IntlProvider>
))

// stories

configure(() => {
  const req = require.context('../src/', true, /.stories.js$/)
  const files = req.keys()
  files.sort().forEach(filename => req(filename))
}, module)
