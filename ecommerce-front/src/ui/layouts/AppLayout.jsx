import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import AppHeader from '../organisms/AppHeader'
import AppFooter from '../organisms/AppFooter'

const AppLayout = ({ children, className, shoppingCart }) => (
  <Fragment>
    <AppHeader shoppingCart={shoppingCart}/>
    <div className="main-content wrapper">
      <div className={className}>
        { children }
      </div>
    </div>
    <AppFooter/>
  </Fragment>
)

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
  shoppingCart: PropTypes.object.isRequired,
  className: PropTypes.string
}

AppLayout.defaultProps = {
  className: ''
}

export default AppLayout
