import { Table, Input } from 'antd'
import UploadImage from './uploadImage'
const { TextArea } = Input

const Edit = ({
  edit,
  changeContent,
  dispatch,
  uploadProps
}) => {
 
  const columns = [ 
    {
      title: '订单号',
      dataIndex: 'orderSubNo',
      className: 'right',
      width: '10%',
      render: (text) => text || '--',
    },
    {
      title: '商品',
      dataIndex: 'productName',
      className: 'left',
      width: '15%',
      render: (text) => text || '--',
    },
    {
      title: '商品数量',
      dataIndex: 'count',
      className: 'right',
      width: '15%',
      render: (text) => text || text === 0 ? text : '--',
    },
    {
      title: '商品图片',
      dataIndex: 'imageUrl',
      width: '15%',
      render: (text, record, index) => {
          return (
            <UploadImage 
              uploadProps = {uploadProps}
              dispatch = {dispatch}
              record = {record}
            />
          )
        },
    },
    {
      title: '申请数量',
      dataIndex: 'applyCount',
      width: '4%',
      render: (text, record, index) => {  
        return(
            < Input
              value={text}
              onChange={(e) => changeContent(e,record,'applyCount') }
            />
        )
      },
    },
    {
      title: '退款原因',
      dataIndex: 'refundReason',
      className: 'left',
      width: '10%',
      render: (text, record, index) => {  
        return(
            < TextArea
              value={text}
              onChange={(e) => changeContent(e,record,'refundReason') }
            />
        )
      },
    },
    {
      title: '收货人信息',
      dataIndex: 'address',
      className: 'left',
      width: '11%',
      render: (text) => text || text === 0 ? text : '--',
    },
  ]
  return (
    <div>
       <Table
          bordered
          style={{ background: '#fff', border: '1px solid #ebebeb' }}
          columns={columns}
          dataSource={edit.addProductList}
          rowKey = "orderItemId"
          pagination={false}
        />
        
    </div>
  )
}

export default Edit