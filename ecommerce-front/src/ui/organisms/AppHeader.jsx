import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

const AppHeader = ({ shoppingCart }) => (
  <div className="header">
    <div className="wrapper">
      <div className="logo">logo</div>
      <ul className="actions">
        <li>
          <FormattedMessage id="text:shop"/>
        </li>
        <li>
          <FormattedMessage id="text:cart"/>
          {` (${ shoppingCart.items.length })`}
        </li>
      </ul>
    </div>
  </div>
)

AppHeader.propTypes = {
  shoppingCart: PropTypes.object.isRequired
}

export default AppHeader
