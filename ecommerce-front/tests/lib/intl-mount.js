import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter as Router } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import setupI18n from '../../src/lib/setup-i18n'

const wrap = (el, locale = 'en') => (
  <Router>
    <IntlProvider messages={setupI18n(locale)}
                  locale={locale}>
      {el}
    </IntlProvider>
  </Router>
)

export const intlMount = (el, locale) => mount(
  wrap(el, locale)
)
