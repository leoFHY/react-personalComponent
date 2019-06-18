// import { routerRedux } from 'dva/router';
import { test } from '../services';
import { message } from 'antd';
import modelExtend from 'dva-model-extend';

export default {
  namespace: 'file',
  state: {
    /* 上传线索上传表格的文件名 */
    fileUploadName: '',
    /* 上传表格列表 */
    fileList: {},
  },
  subscriptions: {
    // setup({ dispatch, history }) {
    //   history.listen(location => {
    //     if (location.pathname === '/dva/filterexp') {
    //       dispatch({
    //         type: 'getPageList',
    //         payload: {},
    //       });
    //     }
    //   });
    // },
  },

  effects: {
    *toTest({ payload }, { put, call, select }) {
      const data = yield call(test, payload);
      if (data.code === 'S000000') {
        // yield put(routerRedux.push('/knowledge'));
        message.success('上传表格成功');
      } else {
        throw data;
      }
    },
  
  },
  reducers: {
    fileUploadName (state, {payload}) {
      return {
        ...state,
        fileUploadName: payload.name,
        fileList: payload.list,
      }
    },
  },
};
