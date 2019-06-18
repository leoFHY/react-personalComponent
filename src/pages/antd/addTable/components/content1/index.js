// import styles from './index.css';
import React, { Component } from 'react'
// import Link from 'umi/link';
import { connect } from 'dva';
// import { throttle } from 'utils/util';
import Content from './content'
import Modal from './modal'
import { deepEqual } from 'assert';
import { deepCopy } from '../../../../../utils/util';
import { message } from 'antd';

class Index extends Component {
  constructor (props){
    super(props)
    this.state = {
      visible: false,
    }
  }
  showModel = () => {
    this.setState({
      visible: true,
    })
    this.props.dispatch({
      type: 'add/getList',
      payload: {}
    })
  }
 
   // 删除不需要退款商品
  delAddlist = () =>{
    // let list = this.props.afterSale.saveProductList
    // let arr = deepCopy(list)
    // let list2 = []
    // this.state.saveId.map(value=>{
    //   list = list.filter(item => {
    //     return value !== item.orderItemId
    //   })
    // })
    //  // 删除后再次请求退运费
    // if (list.length && arr.length) {
    //   let isApply = false
    //    for (let i = 0; i < list.length; i++) {
    //      list2[i] = {}
    //      list2[i].applicationCount = list[i].applyCount
    //      list2[i].orderItemId = list[i].orderItemId || ''
    //      list2[i].refundOrderItemId = list[i].refundOrderItemId || ''
    //      list2[i].refundReason = list[i].refundReason
    //      if (list[i].applyCount > 0) {
    //        isApply = true
    //      } else {
    //        isApply = false
    //      }
    //    }
    //     // 根据所有商品项选择是否退运费
    //     if (isApply) {
    //       this.props.dispatch({
    //         type: 'afterSale/inquireRefundFreight',
    //         payload: {
    //           refundOrderNo: this.props.afterSale.refundOrderInfo.refundOrderNo,
    //           refundProds: list2,
    //         },
    //       })
    //     } else {
    //       this.props.dispatch({
    //         type: 'afterSale/getRefundFreightList',
    //         payload: {
    //           data: [],
    //         },
    //       })
    //     }
    // } else if (arr.length && !list.length) {
    //       this.props.dispatch({
    //         type: 'afterSale/getRefundFreightList',
    //         payload: {
    //           data: [],
    //         },
    //       })
    // }
    // this.props.dispatch({
    //   type: 'afterSale/saveProductList',
    //   payload: list,
    // })
    // let list1 = this.props.afterSale.addProductList
    // this.state.saveId.map(value => {
    //   list1 = list1.filter(item => {
    //     return value !== item.orderItemId
    //   })
    // })
    // this.props.dispatch({
    //   type: 'afterSale/goAddProductList',
    //   payload: list1,
    // })
   
    // this.setState({
    //   saveId: []
    // })
  }
  // 添加商品弹框点击确定，将选中的商品添加到新增订单列表
  handleOk = () => {
     let list = []
    //  arr = deepCopy(this.props.add.saveProductList)
    //  for(var i =0; i<arr.length; i++){
    //    if (!obj[arr[i].orderItemId]) {
    //      list.push(arr[i]);
    //      obj[arr[i].orderItemId] = true;
    //   }
    // }
      // 判断是否有选中
     let show = false
     show = this.props.add.searchProductList.some((item,index)=>{
       return item.check == true
     })
     if (show) {
       // 将退款商品的值赋值给新增退款列表
       this.props.dispatch({
         type: 'add/goAddProductList',
         payload: {
           data: this.props.add.saveProductList,
         } 
       })
       this.setState({
         visible: false
       })
     } else {
       message.warning('您还未添加退款商品，请添加')
       return
     }
  }
  handleCancel = () => {
    this.setState({
      visible: false,
    })
  }
  // 添加商品弹出框勾选保存选中商品列表
  handleCheck = (e,id) =>{
    let list2 = deepCopy(this.props.add.saveProductList)
    let searchlist = this.props.add.searchProductList
    if (e.target.checked){
      let list = searchlist[e.target.value]
      list2.push(list)
      let arr = [],obj = {}
      // 防止重复添加，去重
      for (let i = 0; i < list2.length; i++) {
        if (!obj[list2[i].orderItemId]) {
          arr.push(list2[i]);
          obj[list2[i].orderItemId] = true;
        }
      }
       this.props.dispatch({
         type: 'add/saveProductList',
         payload: {
           data: arr,
         }
       })
      searchlist.map((value, index) => {
          if(value.orderItemId == id){
            value.check = true
          }
      })
      this.props.dispatch({
        type: 'add/searchOrderList',
        payload: {
          data: searchlist
        },
      })
    }else{
      searchlist.map((value, index) => {
        if (value.orderItemId == id) {
          value.check = false
        }
      })
      this.props.dispatch({
        type: 'add/searchOrderList',
        payload: {
          data: searchlist
        },
      })
    }
  }
  render () {
    const contentList = {
      model: this.props.add,
      delAddlist: this.delAddlist,
      showModel: this.showModel,
    }
    const listProps = {
      model: this.props.add,
      visible: this.state.visible,
      handleOk: this.handleOk,
      handleCancel: this.handleCancel,
      handleCheck: this.handleCheck,
    }
    return (
      <div>
           <Content  {...contentList}/>
           <Modal {...listProps}/>
      </div>
    )
  }
}
export default connect(({ add }) => ({ add }))(Index)

