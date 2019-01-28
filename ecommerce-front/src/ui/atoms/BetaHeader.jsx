import React from 'react'
import PropTypes from 'prop-types'

const BetaHeader = ({ children }) => (
  <h1 className="beta">{ children }</h1>
)

BetaHeader.propTypes = {
  children: PropTypes.node
}

BetaHeader.defaultProps = {
  children: ''
}

export default BetaHeader
