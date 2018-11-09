import { constants } from './index'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [],
  recommendList: [],
  newsList: [],
  newsPage: -1,
  showBackTop: false,
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_HOME_DATA:
      // console.log('CHANGE_HOME_DATA', action.topicList)
      return state.merge({
        'topicList': fromJS(action.topicList),
        'recommendList': fromJS(action.recommendList),
        'newsList': fromJS(action.newsList),
      })
    case constants.ADD_NEWS_LIST:
      // console.log('ADD_NEWS_LIST', action.newsList)
      return state.merge({
        'newsList': state.get('newsList').concat(fromJS(action.newsList)),
        'newsPage': action.page
      })
    case constants.TOGGLE_BACKTOP:
      // console.log('TOGGLE_BACKTOP', action)
      return state.set('showBackTop', action.show)
    default:
      return state
  }
}