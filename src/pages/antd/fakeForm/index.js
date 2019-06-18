// import styles from './index.css';
import React, { Component } from 'react'
import TableList from './components/TableList/index'
import ResultList from './components/ResultList/index'
import { connect } from 'dva';
// import { throttle } from 'utils/util';
import {Button} from 'antd'

class Index extends Component {
  constructor (props){
    super(props)
    this.state = {}
  }
  componentDidMount () {
    
  }
  
  render () {
    const fake = this.props.fake
    return (
      <div style={{margin:'50px'}}> 
         <TableList listData={fake.billInfo} styleWrap={{ justifyContent: 'flex-start', margin: 0 }} lineNum={3}/>      
         <br/><br/>
         <ResultList 
            workflowsApprovalType0={fake.workflowsApprovalType0}
            workflowsApprovalType1={fake.workflowsApprovalType1}
         />
      </div>
    )
  }
}
export default connect(({ fake }) => ({ fake }))(Index)

