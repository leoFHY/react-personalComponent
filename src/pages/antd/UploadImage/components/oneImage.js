import React from 'react'
import { Upload, message, Icon ,Modal,Form} from 'antd'
import './common.less'
import {
  multipleImageUploadFan,
  openFileUpload,
} from 'utils/ossUploadUtils'

const uploadImage = ({
  bucket,
  dispatch,
  saveMultipleImgs,
  previewImage,
  previewVisible,
  fileName,
  listImg,
}) => {
  const imgsList = []
  const handleCancel = () => {
    dispatch({
      type: 'image/onCancel',
      payload: {
        previewVisible: false,
      },
    })
  }
  return (
    <div 
    //  className="clearfix uploadImg-w-h-80"
      onClick={(e) => { 
        openFileUpload(e, dispatch,fileName)
      }}
      style = {{width:'1000px'}}
    >
      <Upload
          accept="image/*"
          fileList = { listImg }
          // action={bucket.host}
          listType="picture-card"
          // data={bucket.bucketData}
          onPreview={
            (file) => {
              
              dispatch({
                type: 'image/openPreview',
                payload: {
                  previewSrc: file.url || file.thumbUrl,
                  previewShow: true,
                }
              })
            }
          }
          beforeUpload={(e) => {
            // let isLt200k = e.size / 1024 > 200
            let reg = new RegExp(/^image\/jpeg|gif|jpg|png$/, 'i')
            if (!reg.test(e.type)) {
              message.warn('图片格式不正确,请重新上传!')
              // this.state.imgMaxSize = true
            
              return false
            }
            // if (isLt200k) {
            //   message.warn('图片大小不能超过200kb,请重新上传!')
            //   this.state.imgMaxSize = true
              
            //   return !isLt200k
            // }
          
            imgsList.push(multipleImageUploadFan(e, bucket))
            return false
          }}
          onChange = {
            (e) => {
              message.destroy()
              if (e.file.status == "removed"){
                dispatch({
                  type: 'image/saveOneImages',
                  payload: {
                    data: []
                  }
                })
                return
              }
              message.loading('图片正在上传中，请稍后', 10)

              // return
              if (imgsList.length === e.fileList.length) {
                Promise.all(imgsList).then((res) => {
                  message.destroy()
                  saveMultipleImgs(res)
                }, (rej) => {
                  message.warning(rej)
                }).catch((err) => {
                  // message.warning(err)
                })
              }
            }
          }
        
        >
          {
            !listImg.length ?
              <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
              </div> : null
          }
        </Upload>
      <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </div>
  )
}

export default uploadImage
