import { routerRedux } from 'dva/router';
// import { test } from '../services';
import { message } from 'antd';

export default {
  namespace: 'layout',
  state: {
    active: 0,
    navList: [
      {
        title: '首页',
        route: '#/',
      },
      {
        title: 'DVA',
        route: '#/dva',
      },
      {
        title: 'UMI',
        route: '#/umi',
      },
      {
        title: 'Antd',
        route: '#/antd',
      },
    ],
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        dispatch({
          type: 'toChangeNowNav',
          payload: location.pathname,
        });

        if (location.pathname === '/antd') {
          // 取消effects, 取消之后从新进入页面不会再次加载
          // dispatch({
          //   type: 'dvaData/@@CANCEL_EFFECTS',
          // });
        }
      });
    },
  },

  effects: {
    *test({ payload }, { put, call, select }) {
      const data = yield call(test, payload);
      if (data.code === 'S000000') {
        // yield put(routerRedux.push('/knowledge'));
        message.success('请求数据成功！');
      } else {
        throw data;
      }
    },
    *toChangeNowNav({ payload }, { put, select }) {
      const navList = yield select(state => state.layout.navList);
      let i = 0;
      navList.forEach((element, index) => {
        if (payload.includes(element.route.slice(1))) {
          i = index;
        }
      });
      yield put({
        type: 'toSwitchNav',
        payload: i,
      });
    },
  },
  reducers: {
    toSwitchNav(state, { payload }) {
      return {
        ...state,
        active: payload,
      };
    },
  },
};
