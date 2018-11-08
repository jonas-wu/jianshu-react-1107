import { constants } from './index'
import { fromJS } from 'immutable'
import { stat } from 'fs';

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  searchList: [],
  page: 0,
  totalPage: 1
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.SEARCH_INPUT_FOCUS:
      return state.set('focused', true)
    case constants.SEARCH_INPUT_BLUR:
      return state.set('focused', false)
    case constants.MOUNSE_ENTER:
      return state.set('mouseIn', true)
    case constants.MOUNSE_LEAVE:
      return state.set('mouseIn', false)
    case constants.CHANGE_PAGE:
      return state.set('page', (state.get('page') + 1) % state.get('totalPage'))
    case constants.CHANGE_SEARCH_LIST:
      return state.merge({'searchList': action.data,
      'totalPage': action.totalPage})
    default:
      return state
  }
}