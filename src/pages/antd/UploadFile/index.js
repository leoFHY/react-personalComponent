// import styles from './index.css';
import React, { Component } from 'react'
import Content from './components/index'
// import Link from 'umi/link';
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
  // 上传文件名
  fileName = (name, list) => {
    this.props.dispatch({
      type: 'file/fileUploadName',
      payload: {
        name,
        list,
      },
    })
  }
  handleUpload = () => {
     let formData = new FormData()
     formData.append('file', this.props.file.fileList)
     this.props.dispatch({
       type: 'file/toTest',
       payload: formData,
     })
  }
  render () {
    return (
      <div >
        <h3>
          &nbsp;&nbsp;事例一
        </h3>
        <div style={{ margin:'20px 40px'}}>
          <p style={{ marginBottom:'40px'}}>此组件使用的是axios请求</p>
            <Content fileName={this.fileName} fileUploadName={this.props.file.fileUploadName}/>
            <Button
                  size="large"
                  type="primary"
                  onClick={this.handleUpload}
                  style={{ marginTop:'40px'}}
                >
                  上传
            </Button>
        </div>
      </div>
    )
  }
}
export default connect(({ file }) => ({ file }))(Index)

