import React from 'react'
import { shallow } from 'enzyme'
import Pagination from '../../../src/ui/molecules/Pagination'

describe('<Pagination />', () => {

  const wrapper = shallow(
    <Pagination pages={5}
                currentPage={2} />
  )

  it('mounts correctly', () => {
    expect(wrapper.exists('ul.pagination-container')).toBe(true)
  })

  it('renders the correct number of pages', () => {
    expect(
      wrapper.find('PaginationItem').length
    ).toBe(5)
  })

  it('mark the correct page as active', () => {
    expect(
      wrapper.find('PaginationItem').at(1).props()
    ).toEqual({ page: 2, active: true })
  })

})
