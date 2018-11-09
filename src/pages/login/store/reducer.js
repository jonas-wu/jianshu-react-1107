import { constants } from './index'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  login: false,
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.SET_LOGIN:
      console.log('SET_LOGIN', action)
      return state.merge({
        'login': fromJS(action.login)
      })
    default:
      return state
  }
}