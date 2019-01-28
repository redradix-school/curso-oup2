import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Card = ({ children, transparent }) => (
  <div className={cx({
    'grey-card': !transparent,
    'transparent-card': transparent
  })}>
    { children }
  </div>
)

Card.propTypes = {
  transparent: PropTypes.bool,
  children: PropTypes.node
}

Card.defaultProps = {
  transparent: false
}

export default Card
