import React from 'react'
import PropTypes from 'prop-types'
import RadioGroup from '../molecules/RadioGroup'
import Radio from '../atoms/Radio'

const DeliveryMethodSelector = ({ deliveryMethod, onDeliveryMethodChange }) => (
  <RadioGroup>
    <Radio name="del" value="standard" label="Standard"
           checked={deliveryMethod === 'standard'}
           onChange={onDeliveryMethodChange}/>
    <Radio name="del" value="mail" label="Priority Mail"
           checked={deliveryMethod === 'mail'}
           onChange={onDeliveryMethodChange}/>
    <Radio name="del" value="express" label="Express"
           checked={deliveryMethod === 'express'}
           onChange={onDeliveryMethodChange}/>
  </RadioGroup>
)

DeliveryMethodSelector.propTypes = {
  deliveryMethod: PropTypes.oneOf(
    ['standard', 'mail', 'express']
  ).isRequired,
  onDeliveryMethodChange: PropTypes.func.isRequired
}

export default DeliveryMethodSelector
