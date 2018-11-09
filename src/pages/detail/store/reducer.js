import { constants } from './index'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  title: '',
  content: '',
  imgUrl: '',
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_DETAIL_DATA:
      // console.log('CHANGE_DETAIL_DATA', action)
      return state.merge({
        'title': fromJS(action.title),
        'content': fromJS(action.content),
        'imgUrl': fromJS(action.imgUrl)
      })
    default:
      return state
  }
}