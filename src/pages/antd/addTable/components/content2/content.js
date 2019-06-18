import { Table } from 'antd'

const Edit = ({
  models,
  showDelete
}) => {
   const columns = [
     {
       title: 'SKU',
       dataIndex: 'skuNo',
       key: 'skuNo',
     }, {
       title: '商品名称',
       dataIndex: 'productName',
       key: 'productName',
     }, {
       title: '销售价（元）',
       dataIndex: 'price',
       key: 'price',
     }, {
       title: '颜色',
       dataIndex: 'skuName',
       key: 'skuName',
     }, {
       title: '创建时间',
       dataIndex: 'createTime',
       key: 'createTime',
     },
      {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: (text, record, index) => {
          return (
            <div>
                  <a onClick={() => {showDelete(record,index)}}>删除</a>
            </div>
          )
        },
      },
    ]
    const dataSource = models.addProductList2
  return (
    <div >
       <Table
          bordered
          style={{ background: '#fff', border: '1px solid #ebebeb' }}
          columns={columns}
          dataSource={dataSource}
          rowKey={record => record.id}
          pagination = {false}
        />
    </div>
  )
}

export default Edit