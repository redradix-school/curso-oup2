import React from 'react'
import { mount } from 'enzyme'
import ProductList from '../../../src/ui/views/ProductList'

describe('<ProductList/>', () => {

  it('mounts correctly', () => {
    const wrapper = mount(<ProductList />)
    expect(
      wrapper.find('.intro-title h1').text()
    ).toBe('Products')
  })

})
