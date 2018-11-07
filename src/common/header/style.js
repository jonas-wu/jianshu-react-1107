import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0
`

export const Logo = styled.a.attrs({
  href:'/'
})`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 100%;
  background: url(${logoPic});
  background-size: contain;
` 

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  background: red;
  .iconfont {
    position: absolute;
    right: 0px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    // background: blue;
    line-height: 30px;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
  width: 160px;
  height: 38px;
  border: 1px solid #eee;
  outline: none;
  border-radius: 40px;
  background: #eee;
  margin-top: 9px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  font-size: 14px;
  margin-left: 15px;
  color: #666;
  &::placeholder {
    color: #999
  }
  &.focused {
    width: 200px;
  }
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
`

export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  box-sizing: border-box;
  font-size: 15px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  padding: 0 20px;
  &.reg{
    color: #ec6149
  }
  &.write{
    color: #fff;
    background: #ec6149;
  }
`
