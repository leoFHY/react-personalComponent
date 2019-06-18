// import { routerRedux } from 'dva/router';
import { test } from '../services';
import { message } from 'antd';
import modelExtend from 'dva-model-extend';

export default {
  namespace: 'image',
  state: {
    test: '11',
    /* 存储图片*/
    mediaImages: [],
    /* 预览图片存储*/
    previewImage: '',
    /* 预览图片是否显示*/
    previewVisible: false,
    deliveryItemId: '',
    photoList: {
      photo: [{ uid: '-1', url: '' }],
    },
    /* 存储一张图片*/
    oneImage: [],
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
    // * saveGoodsIntroImgList ({ payload }, { put,call }) {
    //   const ret = yield call(mediaUploadImage,payload)
    //   if(ret.code && ret.code === 'S000000'){
    //     message.success('保存图片成功')
    //   } else {
    //     message.warning(ret.message)
    //   }
    // },
  },
  reducers: {
    onPreview (state,{ payload }){
      return { ...state, ...payload }
    },
    saveMediaImages (state, {payload}) {
      return {
        ...state,
        mediaImages: state.mediaImages.concat(payload.images),
      }
    },
    removeImg (state, {payload}){
      let list = state.mediaImages
      list.splice(payload,1)
      return {
        ...state,
        mediaImages: list,
      }
    },
    removeDetailImg (state,{}){
      return {
        ...state,
        mediaImages: [],
      }
    },
    saveOneImages (state, {payload}) {
      return {
        ...state,
        oneImage: payload.data,
      }
    },
  },
};
