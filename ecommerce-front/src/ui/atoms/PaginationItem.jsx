import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import cx from 'classnames'

const PaginationItem = ({ url, page, active }) => {
  const className = cx('pagination-item', { active })
  return (
    <li className={className}>
      <Link to={`${url}/${page}`}>{ String(page).padStart(2, '0') }</Link>
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
