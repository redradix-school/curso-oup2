import React from 'react'
import { intlMount } from '../../lib/intl-mount'
import ProductList from '../../../src/ui/views/ProductList'
import data from '../../data/product-list.json'
import shoppingCart from '../../data/shopping-cart.json'

describe('<ProductList/>', () => {

  const wrapper = intlMount(
    <ProductList data={data} shoppingCart={shoppingCart}/>
  )

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

  it('distributes the data among its organisms', () => {
    expect(
      wrapper.find('AppLayout').props().shoppingCart
    ).toEqual(shoppingCart)
  })


})
