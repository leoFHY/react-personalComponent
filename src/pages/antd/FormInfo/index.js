// import styles from './index.css';
import React, { Component } from 'react'
import Content from './components/personageMsg/index'
// import Link from 'umi/link';
import { connect } from 'dva';
// import { throttle } from 'utils/util';

class Index extends Component {
  constructor (props){
    super(props)
    this.state = {}
  }
  componentDidMount () {
    
  }
  
  render () {
    return (
      <div>
        <Content/>
      </div>
    )
  }
}
export default connect(({ personageMsg }) => ({ personageMsg }))(Index)

