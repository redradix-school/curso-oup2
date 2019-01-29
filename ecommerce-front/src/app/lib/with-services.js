import React from 'react'
import StateContext from './StateContext'

export default Component => props => (
  <StateContext.Consumer>
    {(services) => (<Component services={services} {...props} />)}
  </StateContext.Consumer>
)
