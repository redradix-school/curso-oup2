import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'
import FormGroup from '../molecules/FormGroup'
import FormField from '../atoms/FormField'

const Field = ({ intl, name, values, errors, onFieldChange, half }) => (
  <FormField label={intl.formatMessage({ id: `label:${name}` })}
             name={name}
             value={values[name]}
             error={errors[name] && intl.formatMessage({
               id: `error:${errors[name]}`
             })}
             onChange={v => onFieldChange(name, v)}
             half={half} />
)

const AddressForm = ({ intl, values, errors, onFieldChange }) => {
  const common = { intl, errors, values, onFieldChange }
  return (
    <FormGroup>
      {/* un ejemplo de como seria a manubrio */}
      <FormField label={intl.formatMessage({ id: 'label:first-name' })}
                 name="first-name"
                 value={values['first-name']}
                 error={errors['first-name']  && intl.formatMessage({
                   id: `error:validation`
                 })}
                 onChange={v => onFieldChange('first-name', v)}
                 half />
      {/* un ejemplo de como podemos automatizar */}
      <Field name='last-name' {...common} half />
      <Field name='address1' {...common} />
      <Field name='address2' {...common} />
      <Field name='pcode' {...common} />
      <Field name='city' {...common} />
      <Field name='state' {...common} />
      <Field name='country' {...common} />
      <Field name='phone' {...common} />
      <Field name='email' {...common} />
    </FormGroup>
  )
}

AddressForm.propTypes = {
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onFieldChange: PropTypes.func.isRequired
}

export default injectIntl(AddressForm)
