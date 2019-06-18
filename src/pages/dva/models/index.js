import { routerRedux } from 'dva/router';
import { test } from '../services';
import { message } from 'antd';

export default {
  namespace: 'dvaData',
  state: {
    test: '11',
    navList: '无数据',
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/dva') {
          dispatch({
            type: 'clearData',
          });
        }
      });
    },
  },

  effects: {
    *toTest({ payload }, { put, call, select }) {
      const data = yield call(test, payload);
      if (data.code === 'S000000') {
        message.success('请求数据成功！');
      } else {
        throw data;
      }
    },
    *getOtherModal({ payload }, { select, put }) {
      const navList = yield select(state => state.layout.navList);
      console.log('navList', navList);
      yield put({
        type: 'saveData',
        payload: navList,
      });
    },
    *clearData({}, { put }) {
      yield put({
        type: 'saveData',
        payload: [],
      });
    },
  },
  reducers: {
    saveData(state, { payload }) {
      return {
        ...state,
        navList: payload,
      };
    },
  },
};
