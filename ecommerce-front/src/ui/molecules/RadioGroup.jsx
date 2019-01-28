import React from 'react'
import PropTypes from 'prop-types'

const RadioGroup = ({ children }) => (
  <div className="form-group radio-group">
    { children }
  </div>
)

RadioGroup.propTypes = {
  children: PropTypes.node.isRequired
}

export default RadioGroup
