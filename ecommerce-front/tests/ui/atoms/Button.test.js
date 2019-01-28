import React from 'react'
import { shallow } from 'enzyme'
import Button from '../../../src/ui/atoms/Button'

describe('<Button />', () => {

  it('mounts correctly', () => {
    const wrapper = shallow(<Button>test</Button>)
    expect(wrapper.exists('.button')).toBe(true)
  })

  it('renders the label correctly', () => {
    const wrapper = shallow(<Button>test</Button>)
    expect(wrapper.text()).toBe('test')
  })

  it('injects the specified className', () => {
    const wrapper = shallow(
      <Button className="test-class">test</Button>
    )
    expect(
      wrapper.exists('button.test-class')
    ).toBe(true)
  })

  it('injects the fullwidth class when specified', () => {
    const wrapper = shallow(
      <Button fullwidth>test</Button>
    )
    expect(wrapper.exists('button.fullwidth')).toBe(true)
  })

})
