import React from 'react'
import { mount, shallow } from 'enzyme'
import { IntlProvider } from 'react-intl'
import setupI18n from '../../src/lib/setup-i18n'

const wrap = (el, locale = 'en') => (
  <IntlProvider messages={setupI18n(locale)}
                locale={locale}>
    {el}
  </IntlProvider>
)

export const intlMount = (el, locale) => mount(
  wrap(el, locale)
)
