import React, { Fragment } from 'react'
import AppHeader from '../organisms/AppHeader'
import AppFooter from '../organisms/AppFooter'

const AppLayout = ({ children, className = '' }) => (
  <Fragment>
  <AppHeader/>
  <div className="main-content wrapper">
    <div className={className}>
      { children }
    </div>
  </div>
  <AppFooter/>
  </Fragment>
)

export default AppLayout
