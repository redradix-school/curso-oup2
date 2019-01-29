import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { configure, addDecorator  } from '@storybook/react'
import { IntlProvider } from 'react-intl'
import setupI18n from '../src/lib/setup-i18n'

import '../public/styles.css'

// i18n

const locale = 'es-ES'

addDecorator(story => (
  <Router>
    <IntlProvider messages={setupI18n(locale)} locale={locale}>
      {story()}
    </IntlProvider>
  </Router>
))

// stories

configure(() => {
  const req = require.context('../src/', true, /.stories.js$/)
  const files = req.keys()
  files.sort().forEach(filename => req(filename))
}, module)
