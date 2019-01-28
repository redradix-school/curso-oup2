import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const CardRow = ({ label, children, bold }) => (
  <div className="row">
    <span className={cx('label', { bold })}>{ label }</span>
    <span className={cx('value', { bold })}>{ children }</span>
  </div>
)

CardRow.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
  bold: PropTypes.bool
}

CardRow.defaultProps = {
  label: '',
  children: '',
  bold: false
}

export default CardRow
