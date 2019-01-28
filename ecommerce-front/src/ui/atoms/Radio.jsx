import React from 'react'
import PropTypes from 'prop-types'

const Radio = ({ checked, value, label, name, onChange }) => (
  <label className="radio-label">
    <input type="radio" checked={checked} name={name}
           value={value}
           onChange={e => onChange(e.target.value)}/>
    <span>{ label }</span>
  </label>

)

Radio.propTypes = {
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func
}

export default Radio
