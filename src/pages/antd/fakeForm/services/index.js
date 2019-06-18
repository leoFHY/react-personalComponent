import request from 'utils/request';
import { mockApi } from 'config';
const { antd } = mockApi;

exports.getFormList = params => {
  return request(
    antd.fakeForm,
    {
      method: 'POST',
      body: JSON.stringify(params),
    },
    ''
  );
};
