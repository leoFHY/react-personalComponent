import { Table, Row, Col, Button } from 'antd'

const Edit = ({
  model,
  showModel,
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
      title: '下单时间',
      dataIndex: 'orderTime',
      width: '10%',
      render: (text) => text || text === 0 ? text : '--',
    },
    {
      title: '退款数量',
      dataIndex: 'refundCount',
      className: 'left',
      width: '10%',
      render: (text) => text || text === 0 ? text : '--',
    },
    {
      title: '电话号码',
      dataIndex: 'phone',
      className: 'left',
      width: '10%',
      render: (text) => text || text === 0 ? text : '--',
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
      <Row style={{ marginTop: '20px' }}>
        <Col span={6} >
          <Button size="large" type="primary" style={{ marginBottom: 10 }} onClick={ showModel }>添加商品</Button>
          {/* <Button style={{ marginLeft: 5 }} size="large" onClick={ delAddlist } type="primary">删除</Button> */}
        </Col>
      </Row>
       <Table
          bordered
          style={{ background: '#fff', border: '1px solid #ebebeb' }}
          columns={columns}
          dataSource={model.addProductList}
          rowKey = "orderItemId"
          pagination={false}
        />
    </div>
  )
}

export default Edit