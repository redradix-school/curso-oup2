import React from 'react'
import { intlMount } from '../../lib/intl-mount'
import { identity } from 'lodash'
import ProductDetails from '../../../src/ui/views/ProductDetails'
import data from '../../data/product-details.json'

describe('<ProductDetails/>', () => {

  const shoppingCart = { items: [1] }

  it('mounts correctly', () => {
    const wrapper = intlMount(
      <ProductDetails data={data}
                      shoppingCart={shoppingCart}
                      onAddToCart={identity}/>
    )
    expect(
      wrapper.exists('ProductInfo')
    ).toBe(true)
  })

  it('invokes the onAddToCart callback when clicked', () => {
    const spy = jest.fn()
    const wrapper = intlMount(
      <ProductDetails data={data}
                      shoppingCart={shoppingCart}
                      onAddToCart={spy}/>
    )
    wrapper.find('Button').simulate('click')
    expect(spy).toHaveBeenCalledWith(data.id, 1)
  })

  it('can change the quantity', () => {
    const spy = jest.fn()
    const wrapper = intlMount(
      <ProductDetails data={data}
                      shoppingCart={shoppingCart}
                      onAddToCart={spy}/>
    )
    wrapper.find('select').simulate('change', {
      target: { value: '5' }
    })
    wrapper.find('Button').simulate('click')
    expect(spy).toHaveBeenCalledWith(data.id, 5)
  })

})
