import { routerRedux } from 'dva/router';
import { getTreeData } from '../services';
import { message } from 'antd';

export default {
  namespace: 'knowledge',
  state: {
    treeList: [],
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/knowledge') {
          dispatch({
            type: 'getTreeList',
            payload: {},
          });
        }
      });
    },
  },

  effects: {
    *getTreeList({ payload }, { put, call, select }) {
      const ret = yield call(getTreeData, payload);
      if (ret.code === 'S000000') {
        console.log('data---', ret);
        yield put({
          type: 'saveTreeData',
          payload: ret.data || [],
        });
      } else {
        message.warn(ret.msg);
      }
    },
  },
  reducers: {
    saveTreeData(state, { payload }) {
      return {
        ...state,
        treeList: payload,
      };
    },
  },
};
