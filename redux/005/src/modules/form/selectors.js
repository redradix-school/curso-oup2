export const getFormFields = (state) => state.form
export const getFormField = (state, fieldName) => state.form[fieldName] || ''
