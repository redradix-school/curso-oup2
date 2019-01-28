import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const FormField = ({ value, label, name, half, error, onChange }) => (
  <div className={cx('field', {
    half,
    error: !!error
  })}>
    <label>{ label }</label>
    <input type="text" name={name} value={value} onChange={
      e => onChange(e.target.value)
    }/>
    { error && <span className="error-message">{ error }</span> }
  </div>
)

FormField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  half: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.bool, PropTypes.string
  ]),
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

FormField.defaultProps = {
  value: '',
  half: false,
  error: false
}

export default FormField
