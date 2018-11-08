import { constants } from './index'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [],
  recommendList: []
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.GET_HOME_DATA:
      // console.log('reducer', action.recommendList)
      return state.merge({
        'topicList': fromJS(action.topicList),
        'recommendList': fromJS(action.recommendList),
      })
    default:
      return state
  }
}