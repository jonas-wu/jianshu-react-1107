import React, {Component} from 'react'
import {TopicWrapper, TopicItem} from '../style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from '../store'

class Topic extends Component {
  render() {
    // console.log(this.props)
    return (
        <TopicWrapper>
          {
            this.props.list.map((item) => {
              return (
                <TopicItem key={item.get('id')}>
                  <img 
                    className='topic-pic'
                    src={item.get('imgUrl')}>
                  </img>
                  {item.get('title')}
                </TopicItem>
              )              
            })
          }
        </TopicWrapper>
    )
  }
}

const mapState = (state) => {
  return ({
    list: state.getIn(['home', 'topicList'])
  })  
}

export default connect(mapState, null)(Topic)