import { UPDATE_FIELD } from './actionTypes'

const initState = {}

const formReducer = (state = initState, action) => {
  const { payload: { fieldName, value } = {} } = action
  switch(action.type) {
    case UPDATE_FIELD:
      return Object.assign({}, state, { [fieldName]: value })
    default:
      return state
  }
}


export default formReducer
