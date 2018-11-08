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