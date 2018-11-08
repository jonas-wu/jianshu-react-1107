import React, {Component} from 'react'
import {HomeWrapper, HomeLeft, HomeRight} from './style'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Home extends Component {
  componentDidMount() {
    this.props.getHomeData()
  }

  render() {
    return (
        <HomeWrapper>
          <HomeLeft>
            <img 
              src='https://upload.jianshu.io/admin_banners/web_images/4548/261804ae4ab744a7148bc40ef9da8e13850e6fdf.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
              className='banner-img'></img>
              <Topic/>
              <List/>
          </HomeLeft>
          <HomeRight>
            <Recommend/>
              <Writer/>
          </HomeRight>
        </HomeWrapper>
    )
  }
}

const mapDispatch = (dispatch) => {
  return {
    getHomeData() {
      dispatch(actionCreators.getHomeData())
    }
  }
}

export default connect(null, mapDispatch)(Home)