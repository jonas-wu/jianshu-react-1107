import React, {Component} from 'react'
import { 
  HeaderWrapper, 
  Logo, 
  Nav, 
  NavItem, 
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actionTypes'

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo/>
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <SearchWrapper>
          <CSSTransition
            in={props.focused}
            timeout={200}
            classNames='slide'>
            <NavSearch className={props.focused ? 'focused' : ''}
              onFocus={props.onInputFocus}
              onBlur={props.onInputBlur}/>
          </CSSTransition>            
          <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe6cf;</i>
        </SearchWrapper>          
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right'>
          <i className="iconfont">&#xe636;</i>
        </NavItem>
      </Nav>
      <Addition>
        <Button className='write'>
          <i className="iconfont">&#xe615;</i>写文章
        </Button>
        <Button className='reg'>注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}
// class Header extends Component {
//   render() {
//     return (
//       <HeaderWrapper>
//         <Logo/>
//         <Nav>
//           <NavItem className='left active'>首页</NavItem>
//           <NavItem className='left'>下载App</NavItem>
//           <SearchWrapper>
//             <CSSTransition
//               in={this.props.focused}
//               timeout={200}
//               classNames='slide'>
//               <NavSearch className={this.props.focused ? 'focused' : ''}
//                 onFocus={this.props.onInputFocus}
//                 onBlur={this.props.onInputBlur}/>
//             </CSSTransition>            
//             <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe6cf;</i>
//           </SearchWrapper>          
//           <NavItem className='right'>登录</NavItem>
//           <NavItem className='right'>
//             <i className="iconfont">&#xe636;</i>
//           </NavItem>
//         </Nav>
//         <Addition>
//           <Button className='write'>
//             <i className="iconfont">&#xe615;</i>写文章
//           </Button>
//           <Button className='reg'>注册</Button>
//         </Addition>
//       </HeaderWrapper>
//     )
//   }
// }

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInputFocus() {
      const action = {
        type: actionTypes.SEARCH_INPUT_FOCUS
      }
      dispatch(action)
    },
    onInputBlur() {
      const action = {
        type: actionTypes.SEARCH_INPUT_BLUR
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)