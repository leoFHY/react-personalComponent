import { message } from 'antd'
// import { hashHistory } from 'dva/router'


export default {
  namespace: 'personageMsg',
  state: {
    oldPwd: '',
    firstPwd: '',
    secondPwd: '',
    detail: {
      photo: [{ uid: '-1', url: '' }],
      companyName: '',
      officeName: '',
      name: '',
      email: '',
      phone: '',
      mobile: '',
      remarks: '',
      mediaList: [],
      userType: '',
      role: '',
    },
    dictList: [],
    mediaList: [],
  },
  subscriptions: {
  },
  effects: {
    // * getMediaList (action, { call, put }) {
    //   const ret = yield call(mediaList, action.payload)
    //   if (ret.code === 'S000000') {
    //     yield put({
    //       type: 'mediaList',
    //       payload: ret.data,
    //     })
    //   } else {
    //     message.warning(ret.message)
    //   }
    // },
  },
  reducers: {
    // dictList (state, { payload }) {
    //   return { ...state, dictList: payload.list }
    // },
  
  },
}
