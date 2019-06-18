import React from 'react'
import { Upload, message, Icon ,Modal,Form} from 'antd'
import './common.less'
import {
  multipleImageUploadFan,
  openFileUpload,
} from 'utils/ossUploadUtils'

const AddMultipleImage = ({
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
      <Upload name="file"
        listType={'picture-card'}
        multiple
        accept="image/*"
        fileList ={[]}
        beforeUpload={(e) => {
          if(listImg.length>8){
            message.warn('图片最多上传8张，请重新上传')
            return false
          }
          let isLt200k = e.size / 1024 > 200
          if (isLt200k) {
            message.warn('图片大小不能超过200kb,请重新上传!')
            return !isLt200k
          }
          console.log(1111111)
          imgsList.push(multipleImageUploadFan(e, bucket))
         
          return false
        }}
        onPreview = {
          (file) => {
            dispatch({
              type: 'image/onPreview',
              payload: {
                previewImage: file.url || file.thumbUrl,
                previewVisible: true,
              },
            })
          }
        }
        onChange={(e) => {
          message.destroy()
          console.log('测试',e)
          return
          message.loading('图片正在上传中，请稍后',10)
          if (imgsList.length === e.fileList.length) {
            Promise.all(imgsList).then((res) => {
              message.destroy()
              saveMultipleImgs(res)    
            }, (rej) => {
              message.warning(rej)
            }).catch((err) => {
              message.warning(err)
              console.log('err',err)           
            })
          }
        }}
      >
        {
          <div>
            <Icon type="plus" />
            {/* <div className="ant-upload-text">上传</div> */}
          </div>
        }
      </Upload>
      <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </div>
  )
}

export default AddMultipleImage
