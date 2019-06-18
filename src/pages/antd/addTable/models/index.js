// import { routerRedux } from 'dva/router';
import { message } from 'antd';
import { getFirstList,getSecondList } from '../services';


export default {
  namespace: 'add',
  state: {
     /*新增退款商品列表1*/
     addProductList: [],
     /*暂存退款商品列表*/
     saveProductList: [],
     /*搜索商品列表*/
     searchProductList: [],
     
     /*新增退款商品列表2*/
     addProductList2: [],
     selectedRowKeys: [],
     /*搜索商品列表*/
     searchProductList2: [],
     temporarySelectedGoods: [],
     temporarySelectedRowKeys: [],
     selectedGoods: [],
     modalColumn : [{
         title: 'SKU',
         dataIndex: 'skuNo',
         key: 'skuNo',
       },
       {
         title: '商品名称',
         dataIndex: 'productName',
         key: 'productName',
       },
       {
         title: '销售价（元）',
         dataIndex: 'price',
         key: 'price',
       },
       {
         title: '颜色',
         dataIndex: 'skuName',
         key: 'skuName',
       },
       {
         title: '创建时间',
         dataIndex: 'createTime',
         key: 'createTime',
       },
     ],
  },
  subscriptions: {
    // 跳转路由时手动情况事例数据
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/antd/addTable') {
          dispatch({
            type: 'goAddProductList',
            payload: {
              data: [],
            },
          });
        }
      });
    },
  },

  effects: {
    /* 事例一部分 */
    *getList({ payload }, { put, call, select }) {
      const ret = yield call(getFirstList, payload);
      const { code, data } = ret
      if (code === 'S000000') {
        // yield put(routerRedux.push('/knowledge'));
        message.success('请求成功');
         yield put({
           type: 'givelist1',
           payload: {
             data,
           },
         })
      } else {
        throw data;
      }
    },

    * getSelectedGoods ({ payload }, { put, select }) {
      let selectRows = yield select(state => state.add.temporarySelectedGoods)
      let selectedRowKeys = yield select(state => state.add.temporarySelectedRowKeys)

      if (payload.selected) { // 增加数据
        // selectRows = selectRows.concat(payload.selectRow || payload.selectRows)
        selectRows = [...((payload.selectRow && [payload.selectRow]) || payload.selectRows), ...selectRows]
        selectedRowKeys = selectedRowKeys.concat(payload.selectedRowKey || payload.selectedRowKeys)
      } else { // 删除数
      
        if (payload.selectedRowKeys) {
          selectRows = selectRows.filter((v) => {
            return payload.selectedRowKeys.findIndex((val) => {
              return val === v.id
            }) === -1
          })
          selectedRowKeys = selectedRowKeys.filter((v) => {
            return payload.selectedRowKeys.findIndex((val) => {
              return val === v
            }) === -1
          })
        } else {
          selectRows = selectRows.filter((v) => {
            return v.id && v.id !== payload.selectedRowKey
          })
          selectedRowKeys = selectedRowKeys.filter((v) => {
            return v !== payload.selectedRowKey
          })
        }
      }
      yield put({
        type: 'temporarySelected',
        payload: {
          selectRows,
          selectedRowKeys,
        },
      })
    },
    * getSaveSelectedGoodsData ({}, { put, select }) {
      let temporarySelectedGoods = yield select(state => state.add.temporarySelectedGoods)
      let temporarySelectedRowKeys = yield select(state => state.add.temporarySelectedRowKeys)
      let addProductList2 = yield select(state => state.add.addProductList2)
      let savedSelectedRowKeys = yield select(state => state.add.selectedRowKeys)

      const selectedGoods = temporarySelectedGoods.concat(addProductList2)
      const selectedRowKeys = temporarySelectedRowKeys.concat(savedSelectedRowKeys)
      //去重
      let goodsList = [],obj1 = {},keyList = [],obj2 = {}
      for (var i = 0; i < selectedGoods.length; i++) {
        if (!obj1[selectedGoods[i].id]) {
          goodsList.push(selectedGoods[i]);
          obj1[selectedGoods[i].id] = true;
        }
      }
      for (var i = 0; i < selectedRowKeys.length; i++) {
        if (!obj2[selectedRowKeys[i]]) {
          keyList.push(selectedRowKeys[i]);
          obj2[selectedRowKeys[i]] = true;
        }
      }
      
      yield put({
        type: 'saveSelectedGoods',
        payload: {
          goodsList,
          keyList,
        },
      })
      yield put({
        type: 'emptyGoods',
      })
    },
    *getActiveCommodity({ payload }, { put, call, select }) {
      const ret = yield call(getSecondList, payload);
      const { code, data } = ret
      if (code === 'S000000') {
        // yield put(routerRedux.push('/knowledge'));
        message.success('请求成功');
         yield put({
           type: 'givelist2',
           payload: {
             data,
           },
         })
      } else {
        throw data;
      }
    },
  },
  reducers: {
    /* 事例一部分 */
    // 请求接口后给列表赋值
    givelist1 (state, { payload }) {
      return {
        ...state,
        searchProductList: payload.data
      }
    },
    // 暂存商品列表
    saveProductList (state,{ payload }){
      return {
        ...state,
        saveProductList: payload.data
      }
    },
    // 更新查询列表
    searchOrderList (state,{ payload }){
      return {
        ...state,
        saveProductList: payload.data
      }
    },
    // 将选中的列表数据赋值给另一个列表
    goAddProductList (state,{ payload }){
      return {
        ...state,
        addProductList: payload.data
      }
    },
    

    /* 事例二部分 */
    temporarySelected (state, { payload }) {
      return {
        ...state,
        temporarySelectedGoods: payload.selectRows,
        temporarySelectedRowKeys: payload.selectedRowKeys,
      }
    },
    saveSelectedGoods (state, { payload }) {
      const { goodsList, keyList } = payload
      return {
        ...state,
        addProductList2: goodsList,
        selectedRowKeys: keyList,
        // goodsList,
        // keyList,
      }
    },
    // 请求接口后给列表赋值
    givelist2 (state, { payload }) {
      return {
        ...state,
        searchProductList2: payload.data.list
      }
    },
    // 删除商品
    deleteProduct (state, { payload }) {
      return {
        ...state,
        addProductList2: payload.list,
        selectedRowKeys: payload.keyList,
      }
    },
    emptyGoods (state) {
      return {
        ...state,
         temporarySelectedGoods: [],
         temporarySelectedRowKeys: [],
      }
    },
  },
};
