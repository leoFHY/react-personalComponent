import request from 'utils/request';
import { mockApi } from 'config';
const { antd } = mockApi;

exports.getAllList = params => {
  return request(
    antd.edit,
    {
      method: 'POST',
      body: JSON.stringify(params),
    },
    ''
  );
};
