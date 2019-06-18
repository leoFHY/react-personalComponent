// import styles from './index.css';
import React, { Component } from 'react'
import Content from './components/index'
import OneImage from './components/oneImage'
// import Link from 'umi/link';
import { connect } from 'dva';
// import { throttle } from 'utils/util';
import {message} from 'antd'

class Index extends Component {
  constructor (props){
    super(props)
    this.state = {}
  }
  componentDidMount () {
    
  }
  render () {
    let { 
      previewImage,
      previewVisible,
      mediaImages,
      oneImage
    } = this.props.image
    const listImg = []
    mediaImages.forEach((item,i) => {
      listImg[i] = {}
      listImg[i].uid = i
      listImg[i].url = item
    })
    const contentList = {
      bucket: this.props.bucket,
      dispatch: this.props.dispatch,
      // model: this.props.image,
      // props: this.props,
      previewImage,
      previewVisible,
      fileName: 'image',
      saveMultipleImgs: (url) => {
        if((mediaImages.length+url.length)> 8) {
          message.warn('图片最多上传8张,请重新上传')
          return false
        }else{
          message.destroy()
          message.info('上传图片成功，如果无需添加，请点击保存')
          this.props.dispatch({
            type: 'image/saveMediaImages',
            payload: {
              images:url,
            },
          })
        }
      },
      saveUploadImgs: (url, id, deliveryItemId) => {
        // if(url.length>0){
        this.props.dispatch({
          type: 'image/saveGoodsIntroImgList',
          payload: {
            images: url,
            goalId: id,
            deliveryItemId: deliveryItemId,
          },
        })
        // }else{
        //   message.warn('您没有上传图片，请上传图片后再保存')
        // }  
      },
      listImg,
      mediaImages,
    }
    const oneImageList = {
      bucket: this.props.bucket,
      dispatch: this.props.dispatch,
      previewImage,
      previewVisible,
      fileName: 'image',
      saveMultipleImgs : (url) => {
        message.destroy()
        message.info('上传图片成功')
        let listImg = []
        listImg[0] = {}
        listImg[0].uid = 1
        //  listImg[0].status = 'done'
        //  listImg[0] = Object.assign({'status':'done'}, listImg[0])
        listImg[0].url = url[0]

        this.props.dispatch({
          type: 'image/saveOneImages',
          payload: {
            data: listImg,
          },
        })
      },
      listImg: oneImage,
    }
    return (
      <div>
        <OneImage { ...oneImageList }/>
        <Content { ...contentList }/>
      </div>
    )
  }
}
export default connect(({ image, loading, bucket }) => ({ image, loading, bucket }))(Index)

