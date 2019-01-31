import React from 'react'
import { connect } from 'react-redux'
import { getFormFields } from 'modules/form/selectors'
import { updateFormField } from 'modules/form/actionCreators'

const Input = ({ value = '', onChange }) => (
  <input type='text' value={value} onChange={e => onChange(e.target.value)}/>
)


const Form = ({ fields, setField }) => (
  <div>
    <Input value={fields['test']}
           onChange={(value) => setField('test', value)}/>
    <Input value={fields['test2']}
           onChange={(value) => setField('test2', value)}/>
  </div>

)


export default connect(
  (state) => ({ fields: getFormFields(state) }),
  (dispatch) => ({
    setField: (name, value) => dispatch(updateFormField(name, value))
  })

)(Form)
