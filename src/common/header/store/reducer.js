import * as actionTypes from '../../../store/actionTypes'

const defaultState = {
  focused: false
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.SEARCH_INPUT_FOCUS:
      return {focused: true}
    case actionTypes.SEARCH_INPUT_BLUR:
      return {focused: false}
    default:
      return state
  }
}