import { constants } from './index'
import axios from 'axios'

const changeDetailData = (data) => ({
  type: constants.CHANGE_DETAIL_DATA,
  title: data.title,
  content: data.content,
  imgUrl: data.imgUrl,
});

export const getDetailData = (id) => {
  return (dispatch) => {
    axios.get('/api/detailData.json?id=' + id)
      .then((res) => {
        const data = res.data;
        // console.log('getHomeData', data)
        dispatch(changeDetailData(data))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}