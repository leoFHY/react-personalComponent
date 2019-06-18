import request from 'utils/request';
import { mockApi } from 'config';
const { dva } = mockApi;

exports.test = params => {
  return request(
    dva.list,
    {
      method: 'POST',
      body: JSON.stringify(params),
    },
    ''
  );
};

exports.download = params => {
  return request(
    dva.download,
    {
      method: 'POST',
      body: JSON.stringify(params),
    },
    ''
  );
};
