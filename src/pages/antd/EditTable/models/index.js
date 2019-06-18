// import { routerRedux } from 'dva/router';
import { message } from 'antd';
import { getAllList } from '../services';


export default {
  namespace: 'edit',
  state: {
     /*新增退款商品列表*/
     addProductList: [],
     
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/antd/EditTable') {
          dispatch({
            type: 'getList',
            payload: {},
          });
        }
      });
    },
  },

  effects: {
    *getList({ payload }, { put, call, select }) {
      const ret = yield call(getAllList, payload);
      const { code, data } = ret
      if (code === 'S000000') {
        // yield put(routerRedux.push('/knowledge'));
        message.success('请求成功');
         yield put({
           type: 'givelist',
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
    // 请求接口后给列表赋值
    givelist (state, {payload}) {
      return {
        ...state,
        addProductList: payload.data
      }
    },
    // 将新的列表值重新赋值
    changeList (state, {payload}) {
      return {
        ...state,
        addProductList: payload.list
      }
    },
    /* 移除商品图片url */
    removeInitImg (state, { payload }) {
      const data = state.addProductList
      data.forEach((e) => {
        if (e.id === payload) {
          e.imageUrl[0].url = ''
        }
        return e
      })
      return { ...state, addProductList: data }
    },
    /* 保存商品图片url */
    saveImgUrl (state, { payload }) {
      const data = state.addProductList
      data.forEach((e) => {
        if (e.id === payload.id) {
          e.imageUrl[0].url = payload.url
        }
        return e
      })
      return { ...state, addProductList: data }
    },
  },
};
