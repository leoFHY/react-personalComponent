import { mockApi } from '../src/utils/config';
const { dva } = mockApi;
module.exports = {
  [`POST ${dva.list}`](req, res) {
    const { query } = req;
    console.log('query', req.body);
    const pageNum = req.body.pageNum || 1;
    const pageData = {
      code: 'S000000',
      message: '请求成功',
      data: {
        pageNum: 1,
        pageSize: 10,
        pageCount: 3,
        total: 30,
        list: [
          {
            id: '1082928239987298306',
            createDate: '2019-01-09 17:13:07',
            status: '6',
            transferReceiptNo: '1234',
            invoicePaymentNo: 'XZ2019010918690395',
            invoiceAmount: 53.0,
            mobelPhone: '18692454926',
            company: '上海蓝裔公司',
            companyAccountName: '王燕雯',
          },
          {
            id: '1082911296387452929',
            createDate: '2019-01-09 16:05:47',
            status: '6',
            transferReceiptNo: '1234',
            invoicePaymentNo: 'XZ2019010914722599',
            invoiceAmount: 554.0,
            mobelPhone: '18692454926',
            company: '上海蓝裔公司',
            companyAccountName: '王燕雯',
          },
          {
            id: '1082574094491115521',
            createDate: '2019-01-08 17:45:52',
            status: '6',
            transferReceiptNo: '1234',
            invoicePaymentNo: 'XZ2019010875203858',
            invoiceAmount: 37.9,
            mobelPhone: '18692454926',
            company: '上海蓝裔公司',
            companyAccountName: '王燕雯',
          },
          {
            id: '1082553443948617730',
            createDate: '2019-01-08 16:23:49',
            status: '6',
            transferReceiptNo: '1234',
            invoicePaymentNo: 'XZ2019010882855368',
            invoiceAmount: 185.0,
            mobelPhone: '18692454926',
            company: '上海蓝裔公司',
            companyAccountName: '王燕雯',
          },
          {
            id: '1082553444049281025',
            createDate: '2019-01-08 16:23:49',
            status: '0',
            transferReceiptNo: null,
            invoicePaymentNo: 'XZ2019010882859856',
            invoiceAmount: 185.0,
            mobelPhone: '18692454926',
            company: '上海蓝裔公司',
            companyAccountName: '王燕雯',
          },
          {
            id: '1082540233245790210',
            createDate: '2019-01-08 15:31:19',
            status: '6',
            transferReceiptNo: '1234',
            invoicePaymentNo: 'XZ2019010867888621',
            invoiceAmount: 789.0,
            mobelPhone: '18692454926',
            company: '上海蓝裔公司',
            companyAccountName: '王燕雯',
          },
          {
            id: '1082536764266975233',
            createDate: '2019-01-08 15:17:32',
            status: '6',
            transferReceiptNo: '1234',
            invoicePaymentNo: 'XZ2019010885180490',
            invoiceAmount: 335.6,
            mobelPhone: '18692454926',
            company: '上海蓝裔公司',
            companyAccountName: '王燕雯',
          },
          {
            id: '1082096128673931266',
            createDate: '2019-01-07 10:06:36',
            status: '0',
            transferReceiptNo: null,
            invoicePaymentNo: 'XZ2019010779609663',
            invoiceAmount: 22.0,
            mobelPhone: '18510488680',
            company: '上海蓝裔网络科技有限公司',
            companyAccountName: 'xuxue',
          },
          {
            id: '1074503904159244290',
            createDate: '2018-12-17 11:17:49',
            status: '6',
            transferReceiptNo: '1234',
            invoicePaymentNo: 'XZ2018121766872524',
            invoiceAmount: 21.0,
            mobelPhone: '18692454926',
            company: '上海蓝裔公司',
            companyAccountName: '王燕雯',
          },
          {
            id: '1074503904100524033',
            createDate: '2018-12-17 11:17:49',
            status: '1',
            transferReceiptNo: null,
            invoicePaymentNo: 'XZ2018121766871195',
            invoiceAmount: 21.0,
            mobelPhone: '18692454926',
            company: '上海蓝裔公司',
            companyAccountName: '王燕雯',
          },
        ],
      },
    };
    const listArr = [];
    const len = 4;
    for (let i = 1; i < len; i++) {
      const _pageData = JSON.parse(JSON.stringify(pageData));
      _pageData.data.pageNum = i;
      _pageData.data.list[0].transferReceiptNo = `page${i}`;
      listArr.push(_pageData);
    }

    res.status(200).json(
      listArr.filter(v => {
        console.log('v----', v.data.pageNum);
        return v.data.pageNum === pageNum;
      })[0]
    );
  },
  [`POST ${dva.download}`](req, res) {
    console.log(req.body);
    res.status(200).json({ code: 'S000000', data: {}, message: '请求成功' });
  },
};
