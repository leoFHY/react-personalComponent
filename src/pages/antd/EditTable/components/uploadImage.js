import {
  Upload,
  Icon,
  message
} from 'antd'
import { onFileSelectChange, beforeUpload, openFileUpload,  } from '../../../../utils/ossUploadUtils'

const uploadImage = ({
  uploadProps,
  dispatch,
  record,
}) => {
  const {
    bucket,
    handlePreview,
    isUploading,
    isUploadingShow,
  } = uploadProps
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
      className="clearfix uploadImg-w-h-80"
      // onClick={(e) => { openFileUpload(e, dispatch) }}
      key={record.id}
    >
      <Upload name="file" 
        action={bucket.host}
        accept="image/*"
        listType="picture-card"
        data={bucket.bucketData}
        onPreview={handlePreview}
        defaultFileList={record.imageUrl[0].url ? record.imageUrl : []}
        // disabled={this.state.disabled}
        beforeUpload={(e) => {
          console.log('触发')
          const isLt2K = e.size / 1024 > 200
          let reg = new RegExp(/^image\/jpeg|gif|jpg|png$/, 'i')
          if (!reg.test(e.type)) {
            message.warn('图片格式不正确,请重新上传!')
            return false
          }
          if (isLt2K) {
            message.error('图片大小不能超过200kb,请重新上传!')
            return !isLt2K
          }
          beforeUpload(e,dispatch)
          isUploadingShow(true)
          return !isLt2K
        }}
        onChange={(e) => {
          const file = e.fileList[0]
          if (!isUploading) {
            return
          }
          if (file && file.status === 'done') {
            isUploadingShow(false)
            // 保存上传的图片
            dispatch({
              type: 'edit/saveImgUrl',
              payload: {
                id: record.id,
                url: `${bucket.host}/${bucket.imageUrl}`,
              },
            })
            record.imageUrl[0].url = `${bucket.host}/${bucket.dir}${file.uid}${file.name}`
          } else {
            file.fileList = []
          }
          onFileSelectChange(e, bucket)
        }}
        onRemove={(e) => {
            dispatch({
              type: 'edit/removeInitImg',
              payload: record.id,
            })
            isUploadingShow(false)
        }}
      >
        {   // 根据url是否存在和是否开始上传，判断是否显示上传按钮
          !(record.imageUrl[0].url.indexOf('https://') > -1) &&
          !isUploading ?
            <div>
              <Icon type="plus" />
              <div className="ant-upload-text">Upload</div>
            </div> : null
        }
      </Upload>

    </div>
  )
}

export default uploadImage