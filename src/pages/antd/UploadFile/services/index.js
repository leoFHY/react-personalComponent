import request from 'utils/request';
import { mockApi } from 'config';
const { antd } = mockApi;

exports.test = params => {
  return request(
    antd.excel,
    {
      method: 'POST',
      params,
      formData: 'formData',
    },
    ''
  );
};
