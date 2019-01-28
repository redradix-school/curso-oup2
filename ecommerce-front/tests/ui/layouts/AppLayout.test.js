import React from 'react'
import { intlMount } from '../../lib/intl-mount'
import AppLayout from '../../../src/ui/layouts/AppLayout'

describe('<AppLayout />', () => {

  const wrapper = intlMount(
    <AppLayout className="test-page"
               shoppingCart={{ items: [1] }}>
      <span className="test-content">content</span>
    </AppLayout>
  )

  it('mounts correctly', () => {
    expect(
      wrapper.find('.test-content').text()
    ).toBe('content')
  })

  it('contains a header and a footer', () => {
    expect(
      wrapper.exists('AppLayout')
    ).toBe(true)
    expect(
      wrapper.exists('AppFooter')
    ).toBe(true)
  })

  it('wraps the content in a div with "className"', () => {
    expect(
      wrapper.find('.test-page > .test-content').text()
    ).toBe('content')
  })

  it('injects the shoping cart items in the header', () => {
    expect(
      wrapper.find('.actions li').at(1).text()
    ).toEqual('Cart (1)')
  })

})
