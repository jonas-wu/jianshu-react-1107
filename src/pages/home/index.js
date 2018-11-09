import React, {PureComponent} from 'react'
import {HomeWrapper, HomeLeft, HomeRight, BackTop} from './style'
import NewsList from './components/NewsList'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Home extends PureComponent {

  componentDidMount() {
    this.props.getHomeData()
    window.addEventListener('scroll', this.props.toggleBackTop)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.toggleBackTop)
  }

  scrollTop() {
    console.log('scrollTop')
    window.scrollTo(0, 0)
  }

  render() {
    return (
        <HomeWrapper>
          <HomeLeft>
            <img 
              src='https://upload.jianshu.io/admin_banners/web_images/4548/261804ae4ab744a7148bc40ef9da8e13850e6fdf.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
              className='banner-img'
              alt=''/>
              <Topic/>
              <NewsList/>
          </HomeLeft>
          <HomeRight>
            <Recommend/>
              <Writer/>
          </HomeRight>
          {
            this.props.showBackTop ? 
              <BackTop onClick={this.scrollTop}>
                回到顶部
              </BackTop> : null
          }
          
        </HomeWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    showBackTop: state.getIn(['home', 'showBackTop'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    getHomeData() {
      dispatch(actionCreators.getHomeData())
    },
    toggleBackTop(show) {
      dispatch(actionCreators.toggleBackTop(document.documentElement.scrollTop > 400))
    }
  }
}

export default connect(mapState, mapDispatch)(Home)