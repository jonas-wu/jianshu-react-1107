import React, {PureComponent} from 'react'
import {LoginWrapper, LoginBox, Input, Button} from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom'

class Login extends PureComponent {

  componentDidMount() {
    
  }

  render() {
    // console.log('Detail', this.props)
    if (this.props.loginStatus) {
      return <Redirect to='/'></Redirect>
    } else {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号' ref={(input) => {this.account = input}}></Input>
            <Input placeholder='密码' type='password' ref={(input) => {this.password = input}}></Input>
            <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }    
  }
}

const mapState = (state) => {
  return {
    loginStatus: state.getIn(['login', 'login']),
  }
}

const mapDispatch = (dispatch) => {
  return {
    login(accountElem, passwordElem) {
      console.log('login', accountElem.value, passwordElem)
      if (accountElem.value && passwordElem.value) {
        dispatch(actionCreators.login(accountElem.value, passwordElem.value))
      } else {
        alert('input account or password')
      }
    }
  }
}

export default connect(mapState, mapDispatch)(Login)