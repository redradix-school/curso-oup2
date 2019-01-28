import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { mapValues, some, values as objValues } from 'lodash'
import { injectIntl } from 'react-intl'
import { isRequired } from '../../lib/validations'
import AppLayout from '../layouts/AppLayout'
import VerticalSeparator from '../atoms/VerticalSeparator'
import IntroTitle from '../molecules/IntroTitle'
import Card from '../molecules/Card'
import AddressForm from '../organisms/AddressForm'
import DeliveryMethodSelector from '../organisms/DeliveryMethodSelector'
import OrderSummary from '../organisms/OrderSummary'
import Button from '../atoms/Button'

const validations = {
  'first-name': [isRequired],
  'last-name': [isRequired],
  'address1': [isRequired],
  'address2': [],
  'pcode': [isRequired],
  'city': [isRequired],
  'state': [isRequired],
  'country': [isRequired],
  'phone': [isRequired],
  'email': [isRequired]
}

function hasErrors(field, value) {
  /* reusable if we pass validations as param */
  if (validations[field]) {
    return validations[field]
      .map(validation => validation(value))
      .filter(error => error !== undefined)
      .shift()
  }
}

function formHandler(validations) {
  /* reusable for every similar form! */
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const onFieldChange = (name, value) => {
    const error = hasErrors(name, value)
    setValues({ ...values, [name]: value })
    setErrors({ ...errors, [name]: error })
  }
  const validateAll = () => {
    const errors = mapValues(
      validations, (_, field) => hasErrors(field, values[field])
    )
    setErrors(errors)
    return some(objValues(errors))
  }
  return [values, errors, onFieldChange, validateAll]
}

const Checkout = ({ shoppingCart, intl, onCheckout }) => {
  const [values, errors, onFieldChange, validateAll] = formHandler(validations)
  const [deliveryMethod, onDeliveryMethodChange] = useState('standard')
  const checkoutAction = () => {
    if (!validateAll()) onCheckout({ ...values, deliveryMethod })
  }
  return (
    <AppLayout className="checkout-page" shoppingCart={shoppingCart}>

      <div className="checkout-forms">
        <VerticalSeparator />
        <IntroTitle
          title={intl.formatMessage({ id: 'title:delivery-address' })}
          subtitle={intl.formatMessage({ id: 'title:enter-address' })}/>
        <VerticalSeparator />
        <AddressForm values={values}
                     errors={errors}
                     onFieldChange={onFieldChange} />
      </div>

      <div className="checkout-summary">

        <Card transparent>
          <IntroTitle
            title={intl.formatMessage({ id: 'title:delivery-method' })}
            subtitle={intl.formatMessage({ id: 'title:messenger' })} />
          <VerticalSeparator />
          <DeliveryMethodSelector deliveryMethod={deliveryMethod}
                                  onDeliveryMethodChange={onDeliveryMethodChange}/>
        </Card>

        <VerticalSeparator />
        <OrderSummary shoppingCart={shoppingCart}
                      title={intl.formatMessage({ id: 'title:order-summary' })}
                      subtitle={intl.formatMessage({ id: 'title:review-order' })}/>
        <Button fullwidth action={checkoutAction}>
          {intl.formatMessage({ id: 'button:pay' })}
        </Button>

      </div>

    </AppLayout>
  )
}

Checkout.propTypes = {
  shoppingCart: PropTypes.object.isRequired
}

export default injectIntl(Checkout)
