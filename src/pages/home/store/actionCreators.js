import { constants } from './index'
import axios from 'axios'
import {fromJS} from 'immutable'

const changeHomeData = (data) => ({
  type: constants.GET_HOME_DATA,
  topicList: data.topicList,
  recommendList: data.recommendList
});

export const getHomeData = () => {
  return (dispatch) => {
    axios.get('/api/homeData.json')
      .then((res) => {
        const data = res.data;
        // console.log('getHomeData', data)
        dispatch(changeHomeData(data))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}