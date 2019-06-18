import request from 'utils/request';
import { mockApi } from 'config';
const { antd } = mockApi;

exports.getFirstList = params => {
  return request(
    antd.search1,
    {
      method: 'POST',
      body: JSON.stringify(params),
    },
    ''
  );
};

exports.getSecondList = params => {
  return request(
    antd.search2, {
      method: 'POST',
      body: JSON.stringify(params),
    },
    ''
  );
};

