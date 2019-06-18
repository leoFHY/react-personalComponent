import { routerRedux } from 'dva/router';
import { test, download } from '../services';
import { message } from 'antd';
import modelExtend from 'dva-model-extend';
import { filterModel } from 'utils/commonModel/index';

export default modelExtend(
  filterModel({ reqFn: test, namespace: 'filter', downloadFn: download }),
  {
    namespace: 'filter',
    state: {
      test: '11',
      columns: [
        {
          title: '提交时间',
          dataIndex: 'createDate',
          key: 'createDate',
        },
        {
          title: '销账单号',
          dataIndex: 'invoicePaymentNo',
          key: 'invoicePaymentNo',
        },
        {
          title: '回执单号',
          dataIndex: 'transferReceiptNo',
          key: 'transferReceiptNo',
        },
        {
          title: '企业账号',
          dataIndex: 'companyAccountName',
          key: 'companyAccountName',
        },
        {
          title: '企业名称',
          dataIndex: 'company',
          key: 'company',
        },
        {
          title: '发票金额',
          dataIndex: 'invoiceAmount',
          key: 'invoiceAmount',
        },
        {
          title: '状态',
          dataIndex: 'status',
          key: 'status',
        },
      ],
    },
    subscriptions: {
      setup({ dispatch, history }) {
        history.listen(location => {
          if (location.pathname === '/dva/filterexp') {
            dispatch({
              type: 'getPageList',
              payload: {},
            });
          }
        });
      },
    },

    effects: {
      *toTest({ payload }, { put, call, select }) {
        const data = yield call(test, payload);
        if (data.code === 'S000000') {
          // yield put(routerRedux.push('/knowledge'));
          message.success('请求数据成功！');
        } else {
          throw data;
        }
      },
    },
    reducers: {
      saveData(state, { payload }) {
        return {
          ...state,
        };
      },
    },
  }
);
