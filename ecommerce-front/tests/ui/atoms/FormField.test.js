import React from 'react'
import { shallow } from 'enzyme'
import { identity } from 'lodash'
import FormField from '../../../src/ui/atoms/FormField'

describe('<FormField />', () => {

  const wrapper = shallow(
    <FormField name="test"
               value="1"
               label="test field"
               half
               onChange={identity}
               error="test error" />
  )

  it('mounts correctly', () => {
    expect(wrapper.exists('input[type="text"]')).toBe(true)
  })

  it('renders the label correctly', () => {
    expect(
      wrapper.find('label').text()
    ).toBe('test field')
  })

  it('only applies the "half" when half prop is true', () => {
    const full = shallow(<FormField name="full" onChange={identity}/>)
    expect(wrapper.exists('.half')).toBe(true)
    expect(full.exists('.half')).toBe(false)
  })

  it('only shows the error message when present', () => {
    const noError = shallow(<FormField name="full" onChange={identity}/>)
    expect(
      wrapper.find('.error-message').text()
    ).toBe('test error')
    expect(noError.exists('.error-message')).toBe(false)
  })

})
