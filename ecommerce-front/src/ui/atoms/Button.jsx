import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { identity } from 'lodash'

const Button = ({ action, children, fullwidth, className }) => (
  <button className={cx("button", { fullwidth }, className)}
          onClick={() => action()}>
    <span>{ children }</span>
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  fullwidth: PropTypes.bool,
  className: PropTypes.string,
  action: PropTypes.func
}

Button.defaultProps = {
  className: '',
  fullwidth: false,
  action: identity
}

export default Button
