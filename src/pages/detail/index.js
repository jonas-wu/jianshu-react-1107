import React, {PureComponent} from 'react'
import {DetailWrapper, Header, Content} from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { withRouter } from 'react-router-dom'

class Detail extends PureComponent {

  componentDidMount() {
    this.props.getData(this.props.match.params.id)
  }

  render() {
    // console.log('Detail', this.props)
    return (
        <DetailWrapper>
          <Header>{this.props.title}</Header>
          <Content dangerouslySetInnerHTML={{__html: this.props.content}}>
            {/* <img src={this.props.imgUrl} alt=''></img> */}
            {/* {this.props.content} */}
          </Content>
        </DetailWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    title: state.getIn(['detail', 'title']),
    imgUrl: state.getIn(['detail', 'imgUrl']),
    content: state.getIn(['detail', 'content']),
  }
}

const mapDispatch = (dispatch) => {
  return {
    getData(id) {
      dispatch(actionCreators.getDetailData(id))
    },
  }
}

export default connect(mapState, mapDispatch)(withRouter(Detail))