// import styles from './index.css';
import React, { Component } from 'react'
// import Link from 'umi/link';
import { connect } from 'dva';
// import { throttle } from 'utils/util';
import Content from './components/index'
import { deepEqual } from 'assert';
import { deepCopy } from '../../../utils/util';
import { message, Modal } from 'antd';

class Index extends Component {
  constructor (props){
    super(props)
    this.state = {
      previewImage: '',
      previewVisible: false,
      isUploading: false,
    }
  }
  // 编辑数字或文字
  changeContent = (e, r, c) => {
    const list = deepCopy(this.props.edit.addProductList)
    let text = e.target.value
    if (c == 'applyCount'){
      if (parseInt(e.target.value) > r.count) {
        message.warning('申请退款数量不可超过总数量')
        text = null
      } else if (parseInt(e.target.value) < 0) {
        message.warning('申请退款数量不能小于0')
        text = null
      }
      for (let i = 0; i < list.length; i++) {
        if (list[i].id == r.id) {
          list[i][c] = text
        }
      }
    } else {
      for (let i = 0; i < list.length; i++) {
        if (list[i].id == r.id) {
          list[i][c] = text
        }
      }
    }
    this.props.dispatch({
      type: 'edit/changeList',
      payload: {
        list
      },
    })
  }
  // 图片部分S
  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }
  isUploadingShow = (value) =>{
    this.setState({
      isUploading: value,
    })
  }
  handleCancel = () => {
    this.setState({
      previewVisible: false,
    })
  }
  render () {
    const contentList = {
      edit: this.props.edit,
      dispatch: this.props.dispatch,
      changeContent: this.changeContent,
      uploadProps:{
        bucket: this.props.bucket,
        handlePreview: this.handlePreview,
        isUploadingShow: this.isUploadingShow,
        isUploading: this.state.isUploading,
      }
    }
    return (
      <div>
         <Content {...contentList}/>
         <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={this.state.previewImage} />
        </Modal>
      </div>
    )
  }
}
export default connect(({ edit, bucket }) => ({ edit, bucket }))(Index)

