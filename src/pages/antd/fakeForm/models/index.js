// import { routerRedux } from 'dva/router';
import { getFormList } from '../services';
import { message } from 'antd';
import modelExtend from 'dva-model-extend';

export default {
  namespace: 'fake',
  state: {
    billInfo: [{
        list: ['名称', 'xxx'],
        id: 'company',
      },
      {
        list: ['纳税人识别号', '11111'],
        id: 'taxpayerId',
      },
      {
        list: ['地址', '申虹路'],
        id: 'companyAddress',
      },
      {
        list: ['电话', '18765792457'],
        id: 'mobelPhone',
      },
      {
        list: ['开户行', '62686797827457'],
        id: 'bank',
      },
      {
        list: ['开户账号', '35479231878125'],
        id: 'bankAccount',
      },
    ],

    detailPageData: {},
    workflowsApprovalType0: {}, // 企业发票审核结果
    workflowsApprovalType1: [], // 企业挂账销账结果
    
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/antd/fakeForm') {
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
      const ret = yield call(getFormList, payload);
      if (ret.code === 'S000000') {
         message.success('请求成功');
         // 审批结果
         let workflowsApprovalType1 = [],workflowsApprovalType0 = {}
         ret.data.workflows.forEach((v) => {
           if (v.approvalType === '0') {
             workflowsApprovalType0 = v
           } else if (v.approvalType === '1') {
             workflowsApprovalType1.push(v)
           }
         })
         yield put({
           type: 'saveWorkflowsApprovalType',
           payload: {
             workflowsApprovalType0,
             workflowsApprovalType1,
           },
         })
       
      } else {
        message.warning(ret.message)
      }
    },
  
  },
  reducers: {
    saveWorkflowsApprovalType (state, { payload }) {
      console.log(payload)
      const {
        workflowsApprovalType0,
        workflowsApprovalType1,
      } = payload
      return {
        ...state,
        workflowsApprovalType0,
        workflowsApprovalType1,
      }
    },
  },
};
