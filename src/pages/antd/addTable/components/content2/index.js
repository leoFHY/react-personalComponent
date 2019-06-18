import React, { Component } from 'react'
import { connect } from 'dva';
import Content from './content'
import Modals from './modal'
import { Modal } from 'antd';

const confirm = Modal.confirm

class Index extends Component {
  constructor (props){
    super(props)
    this.state = {
      visible: false,
      skuMeom: null,
      selectedRows: null,
      disabled: true,
      previewVisible: false,
      previewImage: '',
      selectedRowKeys: [],
      data: [{
        key: '0',
        dd: {
          editable: false,
          value: '1',
        },
        ff: {
          editable: false,
          value: '32',
        },
        rr: {
          editable: false,
          value: 'edit me',
        },
      }],
    }
  }

  warning(text){
    Modal.warning({
      title: '提示',
      content: text,
    })
  }
  showModal = () => {
    this.setState({
      visible: true,
    })
  
    this.props.dispatch({
      type: 'add/getActiveCommodity',
      payload: {},
    })
    this.setState({
      selectedRowKeys: this.props.add.selectedRowKeys,
    })
  }
  handleOk = () => {
    this.setState({
      visible: false,
    })
  }
  handleCancel = () => {
    this.setState({
      visible: false,
    })
  }
  changeRow = (selectedRowKeys,selectedRows)=>{
    this.setState({
      selectedRowKeys,
      selectedRows
    })
  }
  showDelete = (record, index) =>{
    const that = this
    confirm({
      title: '删除确认',
      content: '确定删除该商品吗？',
      onText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        let list = that.props.add.addProductList2.filter((v) => {
          return record.id !== v.id
        })
        let keyList = that.props.add.selectedRowKeys.filter((v) => {
          return record.id !== v
        })
        that.props.dispatch({
          type: 'add/deleteProduct',
          payload: {
            list,
            keyList
          },
        })
      },
      onCancel() {

      },
    })
  }
  render () {
    const contentList = {
      models: this.props.add,
      delAddlist: this.delAddlist,
      showModel: this.showModel,
      showDelete: this.showDelete,
    }
    const listProps = {
      models: this.props.add,
      visible: this.state.visible,
      selectedKeys:this.state.selectedRowKeys,
      showModal: this.showModal,
      selectedRows: this.state.selectedRows,
      handleOk: this.handleOk,
      handleCancel: this.handleCancel,
      dispatch: this.props.dispatch,
      changeRow: this.changeRow
    }

    return (
      <div>
           <Content  {...contentList} />
           <Modals {...listProps}/>
      </div>
    )
  }
}
export default connect(({ add }) => ({ add }))(Index)

