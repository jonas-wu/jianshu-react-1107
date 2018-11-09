import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  height: 300px;
`

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  width: 625px;
  padding-top: 30px;
  .banner-img {
    width: 100%;
    height: 270px;
  }
`

export const HomeRight = styled.div`
  float: right;
  width: 280px;
`

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px; 
`

export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`
export const RecommendWrapper = styled.div`
  width: 100%;
  margin: 30px 0; 
`

export const RecommendItem = styled.div`
  width: 100%;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`

export const NewsListWrapper = styled.div`
  width: 100%;
`

export const NewsListItem = styled.div`
  width: 100%;
  // background: green;
  margin: 20px 0;
  overflow: hidden;
  position:relative;
  .news-title {
    fontSize: 18px;
    width: 70%;
  }
  .news-summary {
    font-size: 13px;
    color: #bbb;
    margin-top: 10px;
    width: 70%;
  }
  .news-img {
    position:absolute;
    top: 0;
    right:0;
    width: 125px;
    height: 100px;
    border-radius: 18px;
    background-size: contain;
  }
`

export const LoadMore = styled.div`
  width: 100%;
  background: gray;
  margin-top: 20px;
  border-radius: 35px;
  border: 1px solid;
  height: 38px;
  line-height: 38px;
  text-align: center;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
`

export const BackTop = styled.div`
  display: block;
  width: 60px;
  // height: 60px;
  // line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  position: fixed;
  right: 100px;
  bottom: 100px;
  font-size:14px;
  padding: 8px 8px;
  cursor: pointer;
`