import { constants } from './index'
import axios from 'axios'

const changeHomeData = (data) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: data.topicList,
  recommendList: data.recommendList,
  newsList: data.newsList
});

const addNewsList = (data, page) => ({
  type: constants.ADD_NEWS_LIST,
  newsList: data,
  page: page
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

export const loadMoreNews = (page) => {
  return (dispatch) => {
    axios.get('/api/newsList.json?page='+page)
      .then((res) => {
        const data = res.data;
        console.log('loadMoreNews', page, data.data)
        dispatch(addNewsList(data.data, page))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const toggleBackTop = (show) => ({
  type: constants.TOGGLE_BACKTOP,
  show
})