import React from 'react'
import PropTypes from 'prop-types'

const Subtitle = ({ children }) => (
  <p className="subtitle">{ children }</p>
)

Subtitle.propTypes = {
  children: PropTypes.string
}

Subtitle.defaultProps = {
  children: ''
}

export default Subtitle
