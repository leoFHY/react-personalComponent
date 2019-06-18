// import styles from './index.css';
import React, { Component } from 'react'
// import Link from 'umi/link';
import { connect } from 'dva';
// import { throttle } from 'utils/util';
import Content1 from './components/content1/index.js'
import Content2 from './components/content2/index.js'

import styles from './index.css';

class Index extends Component {
  constructor (props){
    super(props)
    this.state = {
    }
  }
  
  render () {
   
    return (
      <div>
        <h3 className = {styles.textColor}>
          &nbsp;&nbsp;事例一
        </h3>
        <div className = {styles.layout}>  
           <Content1 />
        </div>
        <h3 className={styles.textColor}>
          &nbsp;&nbsp;事例二
        </h3>
        <div className = {styles.layout}>  
           <Content2 />
        </div>
      </div>
    )
  }
}
export default connect(({ add }) => ({ add }))(Index)

