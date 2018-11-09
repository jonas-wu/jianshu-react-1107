import React, {PureComponent} from 'react'
import { 
  HeaderWrapper, 
  Logo, 
  Nav, 
  NavItem, 
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem
} from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import './style.css'
import { Link } from 'react-router-dom'

class Header extends PureComponent {

  getSearchListArea(show) {
    if (show) {
      const {searchList, page, onMouseEnter, onMouseLeave, changePage} = this.props
      const pageList = [];
      const newList = searchList.toJS()
      // console.log('getSearchListArea page', page)
      for (let i = page * 10; i < (page + 1) * 10 && i < newList.length; i++) {
        pageList.push(
          <SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>
        )
      }
      return (
        <SearchInfo onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => changePage(this.spinIcon)}>
              <i ref={(icon) => {this.spinIcon = icon}} className='iconfont spin'>&#xe630;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <div>{pageList}</div>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render() {
    // console.log('render')
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo/>
        </Link>        
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.props.focused}
              timeout={200}
              classNames='slide'>
              <NavSearch className={this.props.focused ? 'focused' : ''}
                onFocus={() => {this.props.onInputFocus(this.props.searchList)}}
                onBlur={this.props.onInputBlur}/>
            </CSSTransition>            
            <i className={this.props.focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe6cf;</i>
            {this.getSearchListArea(this.props.focused || this.props.mouseIn)}
          </SearchWrapper>
          {
            this.props.login ? 
              <NavItem className='right' onClick={this.props.logout}>退出</NavItem> : 
              <Link to='/login'>
                <NavItem className='right'>登录</NavItem>
              </Link>
          }
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
        </Nav>
        <Addition>
          <Link to='/write'>
            <Button className='write'>
              <i className="iconfont">&#xe615;</i>写文章
            </Button>
          </Link>          
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    searchList: state.getIn(['header', 'searchList']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInputFocus(searchList) {
      // console.log('onInputFocus', searchList)
      (searchList.size === 0) && dispatch(actionCreators.getSearchList())
      dispatch(actionCreators.searchInputFocus())
    },
    onInputBlur() {
      // console.log('onInputBlur')
      dispatch(actionCreators.searchInputBlur())
    },
    onMouseEnter() {
      console.log('onMouseEnter')
      dispatch(actionCreators.mouseEnter())
    },
    onMouseLeave() {
      console.log('onMouseLeave')
      dispatch(actionCreators.mouseLeave())
    },
    changePage(spin) {
      let angle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (angle) {
        angle = parseInt(angle, 10)
      } else {
        angle = 0
      }
      // console.log('changePage angle', angle)
      spin.style.transform = 'rotate(' + (angle+360) + 'deg)'
      dispatch(actionCreators.changePage())
    },
    logout() {
      console.log('logout')
      dispatch(loginActionCreators.logout())
    },   
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)