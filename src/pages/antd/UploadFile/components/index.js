import React from 'react'
import UploadByFormDataExcel from './uploadByFormDataExcel.js'


const Excel = ({
   fileUploadName,
   fileName,
}) => {
  
  return (
    <div>
       <UploadByFormDataExcel
          title="上传表格"
          fileUploadName = {fileUploadName}
          fileCallBack = {fileName}
        > </UploadByFormDataExcel>
    </div>
  )
}

export default Excel