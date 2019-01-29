import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

const AppHeader = ({ shoppingCart }) => (
  <div className="header">
    <div className="wrapper">
      <div className="logo">logo</div>
      <ul className="actions">
        <li>
          <Link to='/catalog'>
            <FormattedMessage id="text:shop"/>
          </Link>
        </li>
        <li>
          <Link to='/cart'>
            <FormattedMessage id="text:cart"/>
            {` (${ shoppingCart.items.length })`}
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

AppHeader.propTypes = {
  shoppingCart: PropTypes.object.isRequired
}

export default AppHeader
