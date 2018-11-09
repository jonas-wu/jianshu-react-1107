import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Login extends PureComponent {

  render() {
    // console.log('Detail', thislogin.props)
    if (!this.props.loginStatus) {
      return <Redirect to='/login'></Redirect>
    } else {
      return (
        <div>
          写文章页面
        </div>
      )
    }    
  }
}

const mapState = (state) => {
  return {
    loginStatus: state.getIn(['login', 'login']),
  }
}

export default connect(mapState, null)(Login)