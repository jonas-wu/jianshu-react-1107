import React, {PureComponent} from 'react'
import {NewsListWrapper, NewsListItem, LoadMore} from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import {Link} from 'react-router-dom'

class NewsList extends PureComponent {
  render() {
    // console.log(this.props)
    return (
        <NewsListWrapper>
          {
            this.props.list.map((item, index) => {
              return (
                <Link to={'/detail/' + item.get('id')}  key={index}>
                    <NewsListItem >
                      <p 
                        className='news-title'>
                        {item.get('title')}
                      </p>
                      <div 
                        className='news-summary'>
                        {item.get('summary')}
                      </div>
                      <img className='news-img' src={item.get('imgUrl')} alt=''></img>
                  </NewsListItem>
                </Link>                
              )              
            })
          }
          <LoadMore onClick={() => this.props.loadMore(this.props.page + 1)}>
            阅读更多
          </LoadMore>
        </NewsListWrapper>
    )
  }
}

const mapState = (state) => {
  // console.log('mapState', state.getIn(['home', 'newsPage']))
  return ({
    list: state.getIn(['home', 'newsList']),
    page: state.getIn(['home', 'newsPage'])
  })  
}

const mapDispatch = (dispatch) => {
  return({
    loadMore(page) {
      dispatch(actionCreators.loadMoreNews(page))
    }
  })
}

export default connect(mapState, mapDispatch)(NewsList)