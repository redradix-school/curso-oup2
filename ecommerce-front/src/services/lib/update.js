import { update } from 'lodash'

export default (state, setState, path, updater) => {
  setState(update(state, path, updater))
}
