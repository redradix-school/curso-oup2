import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { FormattedNumber } from 'react-intl'

const Money = ({ price, quantity, total }) => (
  <span className={cx({
    'product-price': !total,
    'product-total': total
  })}>
    <FormattedNumber style="currency"
                     currency={price.currency}
                     value={(quantity * price.amount / 100)}
    />
  </span>
)

Money.propTypes = {
  price: PropTypes.object,
  quantity: PropTypes.number,
  total: PropTypes.bool
}

Money.defaultProps = {
  price: { amount: 0, currency: 'USD' },
  quantity: 1,
  total: false
}

export default Money
