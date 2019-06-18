import { message } from 'antd';

function Filter(options) {
  return {
    state: {
      dataSource: [],
      pagination: {
        showQuickJumper: true,
        total: 0,
        showTotal(total) {
          return `共 ${total} 条`;
        },
        current: 1,
      },
      searchData: null,
    },
    effects: {
      *getPageList({ payload, cb, isDownload }, { put, call, select }) {
        console.log('搜索数据----', payload);
        let reqFn = options.reqFn;
        // 保存搜索数据
        if (payload.type === 'search') {
          payload = payload.data;
          yield put({
            type: 'saveSearchData',
            payload,
          });
        } else if (payload.type === 'reset') {
          yield put({
            type: 'saveSearchData',
            payload: {},
          });
        }
        const searchData = yield select(state => state[options.namespace].searchData);
        // 添加搜索数据
        if (searchData) {
          Object.assign(payload, searchData);
        }
        // 导出
        if (isDownload) {
          reqFn = options.downloadFn;
        }
        const ret = yield call(reqFn, payload);
        console.log('ret---', ret);
        if (isDownload) return;

        if (ret.code === 'S000000') {
          yield put({
            type: 'pageList',
            payload: ret.data,
          });
          cb && cb();
        } else {
          message.warning(ret.message);
        }
      },
    },
    reducers: {
      pageList(state, { payload }) {
        const { pageNum, total, list } = payload;
        return {
          ...state,
          pagination: { ...state.pagination, total, current: pageNum },
          dataSource: list,
        };
      },
      saveSearchData(state, { payload }) {
        return { ...state, searchData: payload };
      },
    },
  };
}

export default Filter;
