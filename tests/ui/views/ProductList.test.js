import React from 'react'
import { mount } from 'enzyme'
import ProductList from '../../../src/ui/views/ProductList'

describe('<ProductList/>', () => {

  const wrapper = mount(<ProductList />)

  it('mounts correctly', () => {
    expect(
      wrapper.find('.intro-title h1').text()
    ).toBe('Products')
  })

  it('has an AppLayout', () => {
    expect(
      wrapper.exists('AppLayout')
    ).toBe(true)
  })

})
