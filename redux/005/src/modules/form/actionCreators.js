import { UPDATE_FIELD } from './actionTypes'

export const updateFormField = (fieldName, value) => ({
  type: UPDATE_FIELD,
  payload: { fieldName, value }
})
