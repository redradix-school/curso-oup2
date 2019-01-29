import React from 'react'
import PropTypes from 'prop-types'
import { range } from 'lodash'
import PaginationItem from '../atoms/PaginationItem.jsx'

const Pagination = ({ url, pages, currentPage }) => {
  return (
    <ul className="pagination-container">
      { range(1, pages + 1).map(i => (
        <PaginationItem key={i} url={url} page={i}
                        active={i === currentPage} />
      )) }
    </ul>
  )
}

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired
}

export default Pagination
