import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'
import Card from '../molecules/Card'
import CardRow from '../atoms/CardRow'
import IntroTitle from '../molecules/IntroTitle'
import VerticalSeparator from '../atoms/VerticalSeparator'
import Money from '../atoms/Money'

const OrderSummary = ({ shoppingCart, title, subtitle, intl }) => {
  const { items } = shoppingCart
  const total = items
        .map(item => ({ ...item.price, quantity: item.quantity }))
        .reduce((acc, price) => ({
          ...acc,
          amount: acc.amount + price.amount * price.quantity
        }))
  return (
    <Card>
      <IntroTitle title={title} subtitle={subtitle}/>
      <VerticalSeparator />
      { items.map(({ id, title, price, quantity }) => (
        <CardRow label={title} key={id}>
          <Money price={price} quantity={quantity}/>
        </CardRow>
      )) }

      <CardRow label={intl.formatMessage({ id: 'label:shipping' })}>
        { intl.formatMessage({ id: 'text:free' })}
      </CardRow>

      <CardRow bold label={intl.formatMessage({ id: 'label:total' })}>
        <Money total price={total}/>
      </CardRow>
    </Card>
  )
}

OrderSummary.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  shoppingCart: PropTypes.object.isRequired
}

OrderSummary.defaultProps = {
  subtitle: ''
}

export default injectIntl(OrderSummary)
