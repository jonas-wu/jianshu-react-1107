import { constants } from './index'
import axios from 'axios'
import {fromJS} from 'immutable'

export const searchInputFocus = () => ({
  type: constants.SEARCH_INPUT_FOCUS
});

export const searchInputBlur = () => ({
  type: constants.SEARCH_INPUT_BLUR
});

export const mouseEnter = () => ({
  type: constants.MOUNSE_ENTER
});

export const mouseLeave = () => ({
  type: constants.MOUNSE_LEAVE
});

export const changePage = () => ({
  type: constants.CHANGE_PAGE
});

const changeSearchList = (data) => ({
  type: constants.CHANGE_SEARCH_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

export const getSearchList = () => {
  return (dispatch) => {
    axios.get('/api/searchList.json')
      .then((res) => {
        const data = res.data;
        dispatch(changeSearchList(data.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}