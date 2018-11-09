import { constants } from './index'
import axios from 'axios'

const setLogin = (login) => ({
  type: constants.SET_LOGIN,
  login: login,
});

export const login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password' + password)
      .then((res) => {
        const data = res.data;
        console.log('login', data)
        if (data.result) {
          dispatch(setLogin(data.result))
        } else {
          alert('登录失败')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const logout = () => (
  setLogin(false)
)