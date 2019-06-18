import { mockApi } from '../src/utils/config';
const { antd } = mockApi;

module.exports = {
  [`POST ${antd.excel}`](req, res) {
    res.status(200).json({
      code: 'S000000',
      data: {
        test: '11111',
      },
      msg: '请求成功！',
    });
  },
};
