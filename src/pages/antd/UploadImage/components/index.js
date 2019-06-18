import React from 'react'
import { Menu, message, Upload,Button,Modal} from 'antd'
// import { Link } from 'dva/router'
import styles from '../index.css'
import AddMultipleImage from './AddMultipleImage.js'

// const MenuItem = Menu.Item

const Header = ({
  bucket,
  dispatch,
  model,
  saveMultipleImgs,
  previewImage,
  previewVisible,
  props,
  listImg,
  saveUploadImgs,
  mediaImages,
}) => {
  const uploadList = {
    bucket,
    dispatch,
    saveMultipleImgs,
    previewImage,
    previewVisible,
    listImg,
    saveUploadImgs,
    mediaImages,
  }
  const handleCancel = () => {
    dispatch({
      type: 'image/onCancel',
      payload: {
        previewVisible: false,
      },
    })
  }
  const fileName = 'image/'
  return (
    <div>
     
      <div className={styles.upload}>
        <span>上传截图：</span>
        <div>
          {
            // <Upload
            //   listType="picture-card"
            //   fileList={listImg}
            //   onPreview = {
            //     (file) => {
            //       dispatch({
            //         type: 'image/onPreview',
            //         payload: {
            //           previewImage: file.url || file.thumbUrl,
            //           previewVisible: true,
            //         },
            //       })
            //     }
            //   }
            //   onRemove={(e) =>{
            //     dispatch({
            //       type: 'image/removeImg',
            //       payload:e.uid,
            //     })
            //   }}
            // >
            // </Upload>
          }
          {
            listImg.length>=8 ? null : < AddMultipleImage {...uploadList} style = {{maxWidth:'1100px'}} fileName = {fileName}/>
          }
          {
            listImg.length>8 ? null : <Button type="primary" onClick={() => {
              message.destroy()
              // saveUploadImgs(mediaImages, goalId, deliveryItemId)
            } }
            >保存图片</Button>
          }
          <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Header