import React from 'react'

export default mapper => Component => props => (
  <Component {...props} {...mapper(props)} />
)
