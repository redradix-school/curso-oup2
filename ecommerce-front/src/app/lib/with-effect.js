import React, { useEffect } from 'react'

const withEffect = (hook, getValues) => Component => {
  const result = (props) => {
    const values = getValues(props)
    useEffect(() => hook(props), values)
    return (<Component {...props}/>)
  }
  result.displayName = 'WithEffect'
  return result
}

export default withEffect
