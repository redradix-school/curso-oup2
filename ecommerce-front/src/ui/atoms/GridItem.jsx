import React from 'react'
import PropTypes from 'prop-types'

const GridItem = ({ children }) => (
  <div className="grid-item">{children}</div>
)

GridItem.propTypes = {
  children: PropTypes.node.isRequired
}

export default GridItem
