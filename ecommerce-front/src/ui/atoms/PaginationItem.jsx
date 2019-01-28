import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const PaginationItem = ({ page, active }) => {
  const className = cx('pagination-item', { active })
  return (
    <li className={className}>
      { String(page).padStart(2, '0') }
    </li>
  )
}

PaginationItem.propTypes = {
  page: PropTypes.number.isRequired,
  active: PropTypes.bool
}

PaginationItem.defaultProps = {
  active: false
}

export default PaginationItem
