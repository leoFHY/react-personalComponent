import React from 'react'
import {  Button, Table, Input, Modal, message } from 'antd'


const Modal2 = ({
   models, 
   dispatch,
   changeRow,
   selectedKeys,
   showModal,
   visible,
   selectedRows,
   handleCancel, 
   handleOk,
})=>{
  
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        
        changeRow (selectedRowKeys, selectedRows)
      },
      selectedRowKeys: selectedKeys,
      onSelect: (record, selected, selectedRows) => {
        record.stateText = '新建'
        dispatch({
          type: 'add/getSelectedGoods',
          payload: {
            selectRow: record,
            selectedRowKey: record.id,
            selected,
          },
        })
      },
      onSelectAll: (selected, selectedRows, changeRows) => {
        const selectedRowKeys = []
        changeRows.forEach((v) => {
          v.stateText = '新建'
          selectedRowKeys.push(v.id)
        })
        dispatch({
          type: 'add/getSelectedGoods',
          payload: {
            selectRows: changeRows,
            selectedRowKeys,
            selected,
          },
        })
      },
    }
  return (
      <div>
        <Button type="primary" onClick={showModal} style={{marginTop:'20px'}}>添加商品</Button>
        <Modal
          title="添加活动商品"
          visible={visible}
          okText="添加"
          cancelText="关闭"
          width="60%"
          onOk={() => {
            if (selectedRows) {
              dispatch({
                type: 'add/getSaveSelectedGoodsData',
              })
              handleOk()
            } else {
              message.error('你没有选择任何商品！')
            }
          }}
          onCancel={handleCancel}
        >
          <div>
            <span>商品关键字：</span>
            <Input
              placeholder="商品编号、名称、品牌、供应商名称"
              style={{ width: '50%', marginRight: 10, marginBottom: 10 }}
              value={''}
              onChange={(e) => {
                console.log('搜索内容，这部分逻辑自行添加')
              }}
            />
            <Button
              type="primary"
              onClick={() => {
                console.log('点击查询，这部分逻辑自行添加')
              }}
            >搜索</Button>
          </div>
          <Table
            bordered
            style={{ background: '#fff', border: '1px solid #ebebeb' }}
            columns={models.modalColumn}
            dataSource={models.searchProductList2}
            rowSelection={rowSelection}
            rowKey="id"
            pagination = {false}
          />
        </Modal>
      </div>
    )
}


export default Modal2
